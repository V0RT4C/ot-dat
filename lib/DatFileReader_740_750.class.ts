import { DAT_FLAGS_740_750 } from './../const.ts';
import { DatThing } from './../lib/DatThing.class.ts';
import { DatFileReader } from "./../lib/DatFileReader.abstract.ts";

export class DatFileReader_740_750 extends DatFileReader {
    protected _version = 1;

    protected _parseFlags(flag: number, thing: DatThing): void {
        switch(flag){
            case DAT_FLAGS_740_750.GROUND:{
                    const speed = this.readUint16LE();
                    thing.flags.ground = { speed };
                }
                break;
            case DAT_FLAGS_740_750.ON_BOTTOM:
                thing.flags.onBottom = true;
                break;
            case DAT_FLAGS_740_750.ON_TOP:
                thing.flags.onTop = true;
                break;
            case DAT_FLAGS_740_750.CONTAINER:
                thing.flags.container = true;
                break;
            case DAT_FLAGS_740_750.STACKABLE:
                thing.flags.stackable = true;
                break;
            case DAT_FLAGS_740_750.MULTI_USE:
                thing.flags.multiUseable = true;
                break;
            case DAT_FLAGS_740_750.FORCE_USE:
                thing.flags.forceUse = true;
                break;
            case DAT_FLAGS_740_750.WRITABLE:{
                    const length = this.readUint16LE();
                    thing.flags.writable = { length };
                }
                break;
            case DAT_FLAGS_740_750.WRITABLE_ONCE:{
                    const length = this.readUint16LE();
                    thing.flags.writableOnce = { length };
                }
                break;
            case DAT_FLAGS_740_750.FLUID_CONTAINER:
                thing.flags.fluidContainer = true;
                break;
            case DAT_FLAGS_740_750.FLUID:
                thing.flags.fluid = true;
                break;
            case DAT_FLAGS_740_750.UNPASSABLE:
                thing.flags.unpassable = true;
                break;
            case DAT_FLAGS_740_750.UNMOVABLE:
                thing.flags.unmovable = true;
                break;
            case DAT_FLAGS_740_750.BLOCK_MISSILE:
                thing.flags.blockMissile = true;
                break;
            case DAT_FLAGS_740_750.BLOCK_PATHFINDER:
                thing.flags.blockPathfinder = true;
                break;
            case DAT_FLAGS_740_750.PICKUPABLE:
                thing.flags.pickupable = true;
                break;
            case DAT_FLAGS_740_750.LIGHT_INFO:{
                    const level = this.readUint16LE();
                    const color = this.readUint16LE();
                    thing.flags.lightInfo = { level, color };
                }
                break;
            case DAT_FLAGS_740_750.FLOOR_CHANGE:
                thing.flags.floorChange = true;
                break;
            case DAT_FLAGS_740_750.FULL_GROUND:
                thing.flags.fullGround = true;
                break;
            case DAT_FLAGS_740_750.HAS_ELEVATION:{
                    const height = this.readUint16LE();
                    thing.flags.hasElevation = { height };
                }
                break;
            case DAT_FLAGS_740_750.HAS_OFFSET:{
                    const offsetX = 8;
                    const offsetY = 8;
                    thing.flags.hasOffset = { offsetX, offsetY };
                }
                break;
            case DAT_FLAGS_740_750.UNKNOWN:
                break;
            case DAT_FLAGS_740_750.MINIMAP:{
                    const color = this.readUint16LE();
                    thing.flags.minimap = { color };
                }
                break;
            case DAT_FLAGS_740_750.ROTATABLE:
                thing.flags.rotatable = true;
                break;
            case DAT_FLAGS_740_750.LYING_OBJECT:
                thing.flags.lyingObject = true;
                break;
            case DAT_FLAGS_740_750.HANGABLE:
                thing.flags.hangable = true;
                break;
            case DAT_FLAGS_740_750.VERTICAL:
                thing.flags.vertical = true;
                break;
            case DAT_FLAGS_740_750.HORIZONTAL:
                thing.flags.horizontal = true;
                break;
            case DAT_FLAGS_740_750.ALWAYS_ANIMATE:
                thing.flags.alwaysAnimate = true;
                break;
            case DAT_FLAGS_740_750.LENS_HELP:{
                    const value = this.readUint16LE();
                    thing.flags.isLensHelp = { value };
                }
                break;
        }
    }
}