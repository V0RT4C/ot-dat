import { Bytes } from './Bytes.class.ts';
import { DatThing } from './DatThing.class.ts';
import { ThingContainer } from "../lib/ThingContainer.class.ts";
import { DAT_TEXTURE_NAMES, THING_CATEGORY } from "../const.ts";

export abstract class DatFileReader extends Bytes {
    protected abstract _version : number;

    public parse() : ThingContainer {
        const thingTypeContainer : ThingContainer = new ThingContainer();
        thingTypeContainer.signature = this.readSignature();
        this.skip(8); //Skipping item, looktype, effect & missiles counts
        thingTypeContainer.items = this.readItems();
        thingTypeContainer.looktypes = this.readLooktypes();
        thingTypeContainer.effects = this.readEffects();
        thingTypeContainer.missiles = this.readMissiles();
        return thingTypeContainer;
    }

    public readSignature() : number {
        return this.readUint32LE();
    }

    public peekSignature() : number {
        return this.peekUint32LE(0);
    }

    public peekItemCount() : number {
        return this.peekUint16LE(4);
    }

    public peekLooktypeCount() : number {
        return this.peekUint16LE(6);
    }

    public peekEffectsCount() : number {
        return this.peekUint16LE(8);
    }

    public peekMissilesCount() : number {
        return this.peekUint16LE(10);
    }

    public readItems(){
        return this.readThing(100, THING_CATEGORY.ITEM);
    }

    public readLooktypes(){
        return this.readThing(1, THING_CATEGORY.LOOKTYPE);
    }

    public readEffects(){
        return this.readThing(1, THING_CATEGORY.EFFECT);
    }

    public readMissiles(){
        return this.readThing(1, THING_CATEGORY.MISSILE);
    }


    public readThing(startId: number, thingCategory : THING_CATEGORY) : DatThing[] {
        const things : DatThing[] = [];

        let count : number = 0;

        switch(thingCategory){
            case THING_CATEGORY.ITEM:
                count = this.peekItemCount();
            break;
            case THING_CATEGORY.LOOKTYPE:
                count = this.peekLooktypeCount();
            break;
            case THING_CATEGORY.EFFECT:
                count = this.peekEffectsCount();
            break;
            case THING_CATEGORY.MISSILE:
                count = this.peekMissilesCount();
            break;
            default:
                throw new Error('Missing THING_CATEGORY or no category.');
        }

        for (let id=startId; id <= count; id++){
            const thing = new DatThing(id);
            this.readThingFlags(thing);
            this.readThingTextureInfo(thing);
            things.push(thing);
        }

        return things;
    }

    public readThingFlags(thing: DatThing): DatThing {
        let flag : number | boolean = this.readUint8();

        while (flag < 0xFF){
            this._parseFlags(flag, thing);
            flag = this.readUint8();
        }

        return thing;
    }

    public readThingTextureInfo(thing : DatThing){
        thing.setTexture(DAT_TEXTURE_NAMES.WIDTH, this.readUint8());
        thing.setTexture(DAT_TEXTURE_NAMES.HEIGHT, this.readUint8());

        if (thing.width > 1 || thing.height > 1){
            let realSize = this.readUint8();
            let exactSize = Math.min(realSize, Math.max(thing.width * 32, thing.height * 32));
            thing.setTexture(DAT_TEXTURE_NAMES.REAL_SIZE, realSize);
            thing.setTexture(DAT_TEXTURE_NAMES.EXACT_SIZE, exactSize);
        }else{
            thing.setTexture(DAT_TEXTURE_NAMES.REAL_SIZE, 32);
            thing.setTexture(DAT_TEXTURE_NAMES.EXACT_SIZE, Math.min(32, Math.max(thing.width * 32, thing.height * 32)));
        }

        thing.setTexture(DAT_TEXTURE_NAMES.LAYERS, this.readUint8());
        thing.setTexture(DAT_TEXTURE_NAMES.PATTERN_X, this.readUint8());
        thing.setTexture(DAT_TEXTURE_NAMES.PATTERN_Y, this.readUint8());

        if (this._version > 1){
            thing.setTexture(DAT_TEXTURE_NAMES.PATTERN_Z, this.readUint8());
        }else{
            thing.setTexture(DAT_TEXTURE_NAMES.PATTERN_Z, 1);
        }

        thing.setTexture(DAT_TEXTURE_NAMES.ANIMATION, this.readUint8());

        let sprites = thing.width * thing.height * thing.layers * thing.patternX * thing.patternY * thing.patternZ * thing.animations;

        //Animationphases
        //(North, East, South, West)
        for (let i=0; i < sprites; i++){
            let sprId = this.readUint16LE();
            if (sprId){
                thing.addSpriteId(sprId);
            }
        }

        return thing;
    }

    protected abstract _parseFlags(flag: number, thing: DatThing): void;
}