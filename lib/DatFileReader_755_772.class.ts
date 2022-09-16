import { DAT_FLAGS_755_772 } from './../const.ts';
import { DatThing } from './../lib/DatThing.class.ts';
import { DatFileReader } from "./../lib/DatFileReader.abstract.ts";

export class DatFileReader_755_772 extends DatFileReader {
    protected _version = 2;

    protected _parseFlags(flag: number, thing: DatThing): void {
        switch(flag){
            case DAT_FLAGS_755_772.GROUND:{
                    const speed = this.readUint16LE();
                    thing.flags.ground = { speed };
                }
                break;
            case DAT_FLAGS_755_772.GROUND_BORDER:
                thing.flags.groundBorder = true;
                break;
            case DAT_FLAGS_755_772.ON_BOTTOM:
                thing.flags.onBottom = true;
                break;
            case DAT_FLAGS_755_772.ON_TOP:
                thing.flags.onTop = true;
                break;
            case DAT_FLAGS_755_772.CONTAINER:
                thing.flags.container = true;
                break;
            case DAT_FLAGS_755_772.STACKABLE:
                thing.flags.stackable = true;
                break;
            case DAT_FLAGS_755_772.MULTI_USE:
                thing.flags.multiUseable = true;
                break;
            case DAT_FLAGS_755_772.FORCE_USE:
                thing.flags.forceUse = true;
                break;
            case DAT_FLAGS_755_772.WRITABLE:{
                    const length = this.readUint16LE();
                    thing.flags.writable = { length };
                }
                break;
            case DAT_FLAGS_755_772.WRITABLE_ONCE:{
                    const length = this.readUint16LE();
                    thing.flags.writableOnce = { length };
                }
                break;
            case DAT_FLAGS_755_772.FLUID_CONTAINER:
                thing.flags.fluidContainer = true;
                break;
            case DAT_FLAGS_755_772.FLUID:
                thing.flags.fluid = true;
                break;
            case DAT_FLAGS_755_772.UNPASSABLE:
                thing.flags.unpassable = true;
                break;
            case DAT_FLAGS_755_772.UNMOVABLE:
                thing.flags.unmovable = true;
                break;
            case DAT_FLAGS_755_772.BLOCK_MISSILE:
                thing.flags.blockMissile = true;
                break;
            case DAT_FLAGS_755_772.BLOCK_PATHFINDER:
                thing.flags.blockPathfinder = true;
                break;
            case DAT_FLAGS_755_772.PICKUPABLE:
                thing.flags.pickupable = true;
                break;
            case DAT_FLAGS_755_772.LIGHT_INFO:{
                    const level = this.readUint16LE();
                    const color = this.readUint16LE();
                    thing.flags.lightInfo = { level, color };
                }
                break;
            case DAT_FLAGS_755_772.FLOOR_CHANGE:
                thing.flags.floorChange = true;
                break;
            case DAT_FLAGS_755_772.FULL_GROUND:
                thing.flags.fullGround = true;
                break;
            case DAT_FLAGS_755_772.HAS_ELEVATION:{
                    const height = this.readUint16LE();
                    thing.flags.hasElevation = { height };
                }
                break;
            case DAT_FLAGS_755_772.HAS_OFFSET:{
                    const offsetX = this.readUint16LE();
                    const offsetY = this.readUint16LE();
                    thing.flags.hasOffset = { offsetX, offsetY };
                }
                break;
            case DAT_FLAGS_755_772.MINIMAP:{
                    const color = this.readUint16LE();
                    thing.flags.minimap = { color };
                }
                break;
            case DAT_FLAGS_755_772.ROTATABLE:
                thing.flags.rotatable = true;
                break;
            case DAT_FLAGS_755_772.LYING_OBJECT:
                thing.flags.lyingObject = true;
                break;
            case DAT_FLAGS_755_772.HANGABLE:
                thing.flags.hangable = true;
                break;
            case DAT_FLAGS_755_772.VERTICAL:
                thing.flags.vertical = true;
                break;
            case DAT_FLAGS_755_772.HORIZONTAL:
                thing.flags.horizontal = true;
                break;
            case DAT_FLAGS_755_772.ALWAYS_ANIMATE:
                thing.flags.alwaysAnimate = true;
                break;
            case DAT_FLAGS_755_772.LENS_HELP:{
                    const value = this.readUint16LE();
                    thing.flags.isLensHelp = { value };
                }
                break;
            default:
                console.error('Unknown flag');
        }
    }
}