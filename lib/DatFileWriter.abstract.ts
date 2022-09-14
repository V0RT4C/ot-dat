import { DatThing } from './DatThing.class.ts';
import { DAT_SIGNATURES } from './../const.ts';
import { IDatWriterOptions } from './../types.ts';
import { ThingContainer } from './ThingContainer.class.ts';
import { Bytes } from "./Bytes.class.ts";

export abstract class DatFileWriter {
    constructor(
        protected _things : ThingContainer,
        opts? : IDatWriterOptions
    ){
        if (opts){
            if (opts.signature){
                this._signature = opts.signature;
            }

            if (opts.version){
                this._version = opts.version;
            }
        }
    }

    protected _buffer = new Bytes(10000000);
    protected _version = 760;
    protected _signature = DAT_SIGNATURES[760];

    public write() : Uint8Array {
        this._writeSignature();
        this._writeItemCount();
        this._writeLooktypeCount();
        this._writeEffectsCount();
        this._writeMissilesCount();

        for (const item of this._things.items){
            this._writeThing(item);
        }

        for (const looktype of this._things.looktypes){
            this._writeThing(looktype);
        }

        for (const effect of this._things.effects){
            this._writeThing(effect);
        }

        for (const missile of this._things.missiles){
            this._writeThing(missile);
        }

        return this._buffer.slice(0, this._buffer.position);
    }

    protected _writeSignature() : void {
        const signature = parseInt('0x' + this._signature);
        this._buffer.writeUint32LE(signature);
    }

    protected _writeItemCount() : void {
        this._buffer.writeUint16LE(this._things.itemCount);
    }

    protected _writeLooktypeCount() : void {
        this._buffer.writeUint16LE(this._things.looktypeCount);
    }

    protected _writeEffectsCount() : void {
        this._buffer.writeUint16LE(this._things.effectsCount);
    }

    protected _writeMissilesCount() : void {
        this._buffer.writeUint16LE(this._things.missilesCount);
    }

    protected _writeThing(thing : DatThing) : void {
        this._writeThingFlags(thing);
        this._writeThingTextureInfo(thing);
    }

    protected _writeThingTextureInfo(thing : DatThing) : void {
        this._buffer.writeUint8(thing.texture.width);
        this._buffer.writeUint8(thing.texture.height);

        if (thing.texture.width > 1 || thing.texture.height > 1){
            this._buffer.writeUint8(thing.texture.realSize);
        }
        
        this._buffer.writeUint8(thing.texture.layers);
        this._buffer.writeUint8(thing.texture.patternX);
        this._buffer.writeUint8(thing.texture.patternY);

        if (this._version >= 755){
            this._buffer.writeUint8(thing.texture.patternZ);
        }

        this._buffer.writeUint8(thing.texture.animations);

        let sprites = thing.texture.width * thing.texture.height * thing.texture.layers * thing.texture.patternX * thing.texture.patternY * thing.texture.patternZ * thing.texture.animations;

        for (let i=0; i < sprites; i++){
            if (thing.spriteIds[i]){
                this._buffer.writeUint16LE(thing.spriteIds[i]);
            }else{
                this._buffer.writeUint16LE(0);
            }
        }
    }

    protected abstract _writeThingFlags(thing : DatThing) : void;
}