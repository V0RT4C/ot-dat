import { DAT_FLAGS_755_772, DAT_FLAG_NAMES } from './../const.ts';
import { DatThing } from './../lib/DatThing.class.ts';
import { DatFileReader } from "./../lib/DatFileReader.abstract.ts";

export class DatFileReader_755_772 extends DatFileReader {
    protected _version = 2;

    protected _parseFlags(flag: number, thing: DatThing): void {
        switch(flag){
            case DAT_FLAGS_755_772.GROUND:{
                    const speed = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.GROUND, { speed });
                }
                break;
            case DAT_FLAGS_755_772.GROUND_BORDER:
                thing.setFlag(DAT_FLAG_NAMES.GROUND_BORDER, true);
                break;
            case DAT_FLAGS_755_772.ON_BOTTOM:
                thing.setFlag(DAT_FLAG_NAMES.ON_BOTTOM, true);
                break;
            case DAT_FLAGS_755_772.ON_TOP:
                thing.setFlag(DAT_FLAG_NAMES.ON_TOP, true);
                break;
            case DAT_FLAGS_755_772.CONTAINER:
                thing.setFlag(DAT_FLAG_NAMES.CONTAINER, true);
                break;
            case DAT_FLAGS_755_772.STACKABLE:
                thing.setFlag(DAT_FLAG_NAMES.STACKABLE, true);
                break;
            case DAT_FLAGS_755_772.MULTI_USE:
                thing.setFlag(DAT_FLAG_NAMES.MULTI_USEABLE, true);
                break;
            case DAT_FLAGS_755_772.FORCE_USE:
                thing.setFlag(DAT_FLAG_NAMES.FORCE_USE, true);
                break;
            case DAT_FLAGS_755_772.WRITABLE:{
                    const length = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.WRITABLE, { length });
                }
                break;
            case DAT_FLAGS_755_772.WRITABLE_ONCE:{
                    const length = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.WRITABLE_ONCE, { length });
                }
                break;
            case DAT_FLAGS_755_772.FLUID_CONTAINER:
                thing.setFlag(DAT_FLAG_NAMES.FLUID_CONTAINER, true);
                break;
            case DAT_FLAGS_755_772.FLUID:
                thing.setFlag(DAT_FLAG_NAMES.FLUID, true);
                break;
            case DAT_FLAGS_755_772.UNPASSABLE:
                thing.setFlag(DAT_FLAG_NAMES.UNPASSABLE, true);
                break;
            case DAT_FLAGS_755_772.UNMOVABLE:
                thing.setFlag(DAT_FLAG_NAMES.UNMOVABLE, true);
                break;
            case DAT_FLAGS_755_772.BLOCK_MISSILE:
                thing.setFlag(DAT_FLAG_NAMES.BLOCK_MISSILE, true);
                break;
            case DAT_FLAGS_755_772.BLOCK_PATHFINDER:
                thing.setFlag(DAT_FLAG_NAMES.BLOCK_PATHFINDER, true);
                break;
            case DAT_FLAGS_755_772.PICKUPABLE:
                thing.setFlag(DAT_FLAG_NAMES.PICKUPABLE, true);
                break;
            case DAT_FLAGS_755_772.LIGHT_INFO:{
                    const level = this.readUint16LE();
                    const color = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.LIGHT_INFO, { level, color });
                }
                break;
            case DAT_FLAGS_755_772.FLOOR_CHANGE:
                thing.setFlag(DAT_FLAG_NAMES.FLOOR_CHANGE, true);
                break;
            case DAT_FLAGS_755_772.FULL_GROUND:
                thing.setFlag(DAT_FLAG_NAMES.FULL_GROUND, true);
                break;
            case DAT_FLAGS_755_772.HAS_ELEVATION:{
                    const height = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.HAS_ELEVATION, { height });
                }
                break;
            case DAT_FLAGS_755_772.HAS_OFFSET:{
                    const offsetX = this.readUint16LE();
                    const offsetY = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.HAS_OFFSET, { offsetX, offsetY });
                }
                break;
            case DAT_FLAGS_755_772.MINIMAP:{
                    const color = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.MINIMAP, { color });
                }
                break;
            case DAT_FLAGS_755_772.ROTATABLE:
                thing.setFlag(DAT_FLAG_NAMES.ROTATABLE, true);
                break;
            case DAT_FLAGS_755_772.LYING_OBJECT:
                thing.setFlag(DAT_FLAG_NAMES.LYING_OBJECT, true);
                break;
            case DAT_FLAGS_755_772.HANGABLE:
                thing.setFlag(DAT_FLAG_NAMES.HANGABLE, true);
                break;
            case DAT_FLAGS_755_772.VERTICAL:
                thing.setFlag(DAT_FLAG_NAMES.VERTICAL, true);
                break;
            case DAT_FLAGS_755_772.HORIZONTAL:
                thing.setFlag(DAT_FLAG_NAMES.HORIZONTAL, true);
                break;
            case DAT_FLAGS_755_772.ALWAYS_ANIMATE:
                thing.setFlag(DAT_FLAG_NAMES.ALWAYS_ANIMATE, true);
                break;
            case DAT_FLAGS_755_772.LENS_HELP:{
                    const value = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.IS_LENS_HELP, { value });
                }
                break;
            default:
                console.error('Unknown flag');
                console.log(thing);
                Deno.exit(0);
                // console.log(thing);
                // Deno.exit(0);
        }
    }
}