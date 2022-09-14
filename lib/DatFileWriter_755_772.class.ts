import { DatThing } from './DatThing.class.ts';
import { DAT_FLAGS_755_772 } from './../const.ts';
import { DatFileWriter } from './DatFileWriter.abstract.ts';

export class DatFileWriter_755_772 extends DatFileWriter {

    protected _writeThingFlags(thing : DatThing) : void {
        if (thing.ground){
            this._buffer.writeUint8(DAT_FLAGS_755_772.GROUND);
            this._buffer.writeUint16LE(thing.groundSpeed);
        }

        if (thing.groundBorder){
            this._buffer.writeUint8(DAT_FLAGS_755_772.GROUND_BORDER);
        }

        if (thing.onBottom){
            this._buffer.writeUint8(DAT_FLAGS_755_772.ON_BOTTOM);
        }

        if (thing.onTop){
            this._buffer.writeUint8(DAT_FLAGS_755_772.ON_TOP);
        }

        if (thing.container){
            this._buffer.writeUint8(DAT_FLAGS_755_772.STACKABLE);
        }

        if (thing.stackable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.STACKABLE);
        }

        if (thing.multiUsable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.MULTI_USE);
        }

        if (thing.forceUse){
            this._buffer.writeUint8(DAT_FLAGS_755_772.FORCE_USE);
        }

        if (thing.writable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.WRITABLE);
            this._buffer.writeUint16LE(thing.writableLength);
        }

        if (thing.writableOnce){
            this._buffer.writeUint8(DAT_FLAGS_755_772.WRITABLE_ONCE);
            this._buffer.writeUint16LE(thing.writableLength);
        }

        if (thing.fluidContainer){
            this._buffer.writeUint8(DAT_FLAGS_755_772.FLUID_CONTAINER);
        }

        if (thing.fluid){
            this._buffer.writeUint8(DAT_FLAGS_755_772.FLUID);
        }

        if (thing.unpassable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.UNPASSABLE);
        }

        if (thing.unmovable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.UNMOVABLE);
        }

        if (thing.blockMissile){
            this._buffer.writeUint8(DAT_FLAGS_755_772.BLOCK_MISSILE);
        }

        if (thing.blockPathfinder){
            this._buffer.writeUint8(DAT_FLAGS_755_772.BLOCK_PATHFINDER);
        }

        if (thing.pickupable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.PICKUPABLE);
        }

        if (thing.lightInfo){
            this._buffer.writeUint8(DAT_FLAGS_755_772.LIGHT_INFO);
            this._buffer.writeUint16LE(thing.lightLevel);
            this._buffer.writeUint16LE(thing.lightColor);
        }

        if (thing.floorChange){
            this._buffer.writeUint8(DAT_FLAGS_755_772.FLOOR_CHANGE);
        }

        if (thing.fullGround){
            this._buffer.writeUint8(DAT_FLAGS_755_772.FULL_GROUND);
        }

        if (thing.hasElevation){
            this._buffer.writeUint8(DAT_FLAGS_755_772.HAS_ELEVATION);
            this._buffer.writeUint16LE(thing.elevation);
        }

        if (thing.hasOffset){
            this._buffer.writeUint8(DAT_FLAGS_755_772.HAS_OFFSET);
            this._buffer.writeUint16LE(thing.offsetX);
            this._buffer.writeUint16LE(thing.offsetY);
        }

        if (thing.minimap){
            this._buffer.writeUint8(DAT_FLAGS_755_772.MINIMAP);
            this._buffer.writeUint16LE(thing.minimapColor);
        }

        if (thing.rotatable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.ROTATABLE);
        }

        if (thing.lyingObject){
            this._buffer.writeUint8(DAT_FLAGS_755_772.LYING_OBJECT);
        }

        if (thing.hangable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.HANGABLE);
        }

        if (thing.vertical){
            this._buffer.writeUint8(DAT_FLAGS_755_772.VERTICAL);
        }

        if (thing.horizontal){
            this._buffer.writeUint8(DAT_FLAGS_755_772.HORIZONTAL);
        }

        if (thing.alwaysAnimate){
            this._buffer.writeUint8(DAT_FLAGS_755_772.ALWAYS_ANIMATE);
        }

        if (thing.isLensHelp){
            this._buffer.writeUint8(DAT_FLAGS_755_772.LENS_HELP);
            this._buffer.writeUint16LE(thing.lensHelpValue);
        }

        this._buffer.writeUint8(0xFF);
    }
}