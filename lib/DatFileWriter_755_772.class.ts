import { DatThing } from './DatThing.class.ts';
import { DAT_FLAGS_755_772 } from './../const.ts';
import { DatFileWriter } from './DatFileWriter.abstract.ts';

export class DatFileWriter_755_772 extends DatFileWriter {

    protected _writeThingFlags(thing : DatThing) : void {
        if (thing.flags.ground){
            this._buffer.writeUint8(DAT_FLAGS_755_772.GROUND);
            this._buffer.writeUint16LE(thing.flags.ground.speed);
        }

        if (thing.flags.groundBorder){
            this._buffer.writeUint8(DAT_FLAGS_755_772.GROUND_BORDER);
        }

        if (thing.flags.onBottom){
            this._buffer.writeUint8(DAT_FLAGS_755_772.ON_BOTTOM);
        }

        if (thing.flags.onTop){
            this._buffer.writeUint8(DAT_FLAGS_755_772.ON_TOP);
        }

        if (thing.flags.container){
            this._buffer.writeUint8(DAT_FLAGS_755_772.STACKABLE);
        }

        if (thing.flags.stackable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.STACKABLE);
        }

        if (thing.flags.multiUseable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.MULTI_USE);
        }

        if (thing.flags.forceUse){
            this._buffer.writeUint8(DAT_FLAGS_755_772.FORCE_USE);
        }

        if (thing.flags.writable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.WRITABLE);
            this._buffer.writeUint16LE(thing.flags.writable.length);
        }

        if (thing.flags.writableOnce){
            this._buffer.writeUint8(DAT_FLAGS_755_772.WRITABLE_ONCE);
            this._buffer.writeUint16LE(thing.flags.writableOnce.length);
        }

        if (thing.flags.fluidContainer){
            this._buffer.writeUint8(DAT_FLAGS_755_772.FLUID_CONTAINER);
        }

        if (thing.flags.fluid){
            this._buffer.writeUint8(DAT_FLAGS_755_772.FLUID);
        }

        if (thing.flags.unpassable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.UNPASSABLE);
        }

        if (thing.flags.unmovable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.UNMOVABLE);
        }

        if (thing.flags.blockMissile){
            this._buffer.writeUint8(DAT_FLAGS_755_772.BLOCK_MISSILE);
        }

        if (thing.flags.blockPathfinder){
            this._buffer.writeUint8(DAT_FLAGS_755_772.BLOCK_PATHFINDER);
        }

        if (thing.flags.pickupable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.PICKUPABLE);
        }

        if (thing.flags.lightInfo){
            this._buffer.writeUint8(DAT_FLAGS_755_772.LIGHT_INFO);
            this._buffer.writeUint16LE(thing.flags.lightInfo.level);
            this._buffer.writeUint16LE(thing.flags.lightInfo.color);
        }

        if (thing.flags.floorChange){
            this._buffer.writeUint8(DAT_FLAGS_755_772.FLOOR_CHANGE);
        }

        if (thing.flags.fullGround){
            this._buffer.writeUint8(DAT_FLAGS_755_772.FULL_GROUND);
        }

        if (thing.flags.hasElevation){
            this._buffer.writeUint8(DAT_FLAGS_755_772.HAS_ELEVATION);
            this._buffer.writeUint16LE(thing.flags.hasElevation.height);
        }

        if (thing.flags.hasOffset){
            this._buffer.writeUint8(DAT_FLAGS_755_772.HAS_OFFSET);
            this._buffer.writeUint16LE(thing.flags.hasOffset.offsetX);
            this._buffer.writeUint16LE(thing.flags.hasOffset.offsetY);
        }

        if (thing.flags.minimap){
            this._buffer.writeUint8(DAT_FLAGS_755_772.MINIMAP);
            this._buffer.writeUint16LE(thing.flags.minimap.color);
        }

        if (thing.flags.rotatable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.ROTATABLE);
        }

        if (thing.flags.lyingObject){
            this._buffer.writeUint8(DAT_FLAGS_755_772.LYING_OBJECT);
        }

        if (thing.flags.hangable){
            this._buffer.writeUint8(DAT_FLAGS_755_772.HANGABLE);
        }

        if (thing.flags.vertical){
            this._buffer.writeUint8(DAT_FLAGS_755_772.VERTICAL);
        }

        if (thing.flags.horizontal){
            this._buffer.writeUint8(DAT_FLAGS_755_772.HORIZONTAL);
        }

        if (thing.flags.alwaysAnimate){
            this._buffer.writeUint8(DAT_FLAGS_755_772.ALWAYS_ANIMATE);
        }

        if (thing.flags.isLensHelp){
            this._buffer.writeUint8(DAT_FLAGS_755_772.LENS_HELP);
            this._buffer.writeUint16LE(thing.flags.isLensHelp.value);
        }

        this._buffer.writeUint8(0xFF);
    }
}