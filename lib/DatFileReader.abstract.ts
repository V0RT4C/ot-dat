import { Bytes } from './Bytes.class.ts';
import { DatThing } from './DatThing.class.ts';
import { ThingContainer } from "../lib/ThingContainer.class.ts";
import { THING_CATEGORY } from "../const.ts";

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
        thing.texture.width = this.readUint8();
        thing.texture.height = this.readUint8();

        if (thing.texture.width > 1 || thing.texture.height > 1){
            thing.texture.realSize = this.readUint8();
            thing.texture.exactSize = Math.min(thing.texture.realSize, Math.max(thing.texture.width * 32, thing.texture.height * 32));
        }else{
            thing.texture.realSize = 32;
            thing.texture.exactSize = Math.min(32, Math.max(thing.texture.width * 32, thing.texture.height * 32))
        }

        thing.texture.layers = this.readUint8();
        thing.texture.patternX = this.readUint8();
        thing.texture.patternY = this.readUint8();

        if (this._version > 1){
            thing.texture.patternZ = this.readUint8();
        }else{
            thing.texture.patternZ = 1;
        }

        thing.texture.animations = this.readUint8();
        
        let sprites = thing.texture.width * thing.texture.height * thing.texture.layers * thing.texture.patternX * thing.texture.patternY * thing.texture.patternZ * thing.texture.animations;

        //Animationphases
        //(North, East, South, West)
        for (let i=0; i < sprites; i++){
            let sprId = this.readUint16LE();
            thing.spriteIds.push(sprId);
        }

        return thing;
    }

    protected abstract _parseFlags(flag: number, thing: DatThing): void;
}