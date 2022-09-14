import { DatThing } from './DatThing.class.ts';
import { DAT_FLAGS_740_750 } from './../const.ts';
import { DatFileWriter } from './DatFileWriter.abstract.ts';

export class DatFileWriter_740_750 extends DatFileWriter {

    protected _writeThingFlags(thing : DatThing) : void {
        if (thing.ground){
            this._buffer.writeUint8(DAT_FLAGS_740_750.GROUND);
            this._buffer.writeUint16LE(thing.groundSpeed);
        }

        if (thing.onBottom){
            this._buffer.writeUint8(DAT_FLAGS_740_750.ON_BOTTOM);
        }

        if (thing.onTop){
            this._buffer.writeUint8(DAT_FLAGS_740_750.ON_TOP);
        }

        if (thing.container){
            this._buffer.writeUint8(DAT_FLAGS_740_750.STACKABLE);
        }

        if (thing.stackable){
            this._buffer.writeUint8(DAT_FLAGS_740_750.STACKABLE);
        }

        if (thing.multiUsable){
            this._buffer.writeUint8(DAT_FLAGS_740_750.MULTI_USE);
        }

        if (thing.forceUse){
            this._buffer.writeUint8(DAT_FLAGS_740_750.FORCE_USE);
        }

        if (thing.writable){
            this._buffer.writeUint8(DAT_FLAGS_740_750.WRITABLE);
            this._buffer.writeUint16LE(thing.writableLength);
        }

        if (thing.writableOnce){
            this._buffer.writeUint8(DAT_FLAGS_740_750.WRITABLE_ONCE);
            this._buffer.writeUint16LE(thing.writableLength);
        }

        if (thing.fluidContainer){
            this._buffer.writeUint8(DAT_FLAGS_740_750.FLUID_CONTAINER);
        }

        if (thing.fluid){
            this._buffer.writeUint8(DAT_FLAGS_740_750.FLUID);
        }

        if (thing.unpassable){
            this._buffer.writeUint8(DAT_FLAGS_740_750.UNPASSABLE);
        }

        if (thing.unmovable){
            this._buffer.writeUint8(DAT_FLAGS_740_750.UNMOVABLE);
        }

        if (thing.blockMissile){
            this._buffer.writeUint8(DAT_FLAGS_740_750.BLOCK_MISSILE);
        }

        if (thing.blockPathfinder){
            this._buffer.writeUint8(DAT_FLAGS_740_750.BLOCK_PATHFINDER);
        }

        if (thing.pickupable){
            this._buffer.writeUint8(DAT_FLAGS_740_750.PICKUPABLE);
        }

        if (thing.lightInfo){
            this._buffer.writeUint8(DAT_FLAGS_740_750.LIGHT_INFO);
            this._buffer.writeUint16LE(thing.lightLevel);
            this._buffer.writeUint16LE(thing.lightColor);
        }

        if (thing.floorChange){
            this._buffer.writeUint8(DAT_FLAGS_740_750.FLOOR_CHANGE);
        }

        if (thing.fullGround){
            this._buffer.writeUint8(DAT_FLAGS_740_750.FULL_GROUND);
        }

        if (thing.hasElevation){
            this._buffer.writeUint8(DAT_FLAGS_740_750.HAS_ELEVATION);
            this._buffer.writeUint16LE(thing.elevation);
        }

        if (thing.hasOffset){
            this._buffer.writeUint8(DAT_FLAGS_740_750.HAS_OFFSET);
        }

        if (thing.minimap){
            this._buffer.writeUint8(DAT_FLAGS_740_750.MINIMAP);
            this._buffer.writeUint16LE(thing.minimapColor);
        }

        if (thing.rotatable){
            this._buffer.writeUint8(DAT_FLAGS_740_750.ROTATABLE);
        }

        if (thing.lyingObject){
            this._buffer.writeUint8(DAT_FLAGS_740_750.LYING_OBJECT);
        }

        if (thing.hangable){
            this._buffer.writeUint8(DAT_FLAGS_740_750.HANGABLE);
        }

        if (thing.vertical){
            this._buffer.writeUint8(DAT_FLAGS_740_750.VERTICAL);
        }

        if (thing.horizontal){
            this._buffer.writeUint8(DAT_FLAGS_740_750.HORIZONTAL);
        }

        if (thing.alwaysAnimate){
            this._buffer.writeUint8(DAT_FLAGS_740_750.ALWAYS_ANIMATE);
        }

        if (thing.isLensHelp){
            this._buffer.writeUint8(DAT_FLAGS_740_750.LENS_HELP);
            this._buffer.writeUint16LE(thing.lensHelpValue);
        }

        this._buffer.writeUint8(0xFF);
    }
}