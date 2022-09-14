import { DAT_FLAGS_740_750, DAT_FLAG_NAMES } from './../const.ts';
import { DatThing } from './../lib/DatThing.class.ts';
import { DatFileReader } from "./../lib/DatFileReader.abstract.ts";

export class DatFileReader_740_750 extends DatFileReader {
    protected _version = 1;

    protected _parseFlags(flag: number, thing: DatThing): void {
        switch(flag){
            case DAT_FLAGS_740_750.GROUND:{
                    const speed = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.GROUND, { speed });
                }
                break;
            case DAT_FLAGS_740_750.ON_BOTTOM:
                thing.setFlag(DAT_FLAG_NAMES.ON_BOTTOM, true);
                break;
            case DAT_FLAGS_740_750.ON_TOP:
                thing.setFlag(DAT_FLAG_NAMES.ON_TOP, true);
                break;
            case DAT_FLAGS_740_750.CONTAINER:
                thing.setFlag(DAT_FLAG_NAMES.CONTAINER, true);
                break;
            case DAT_FLAGS_740_750.STACKABLE:
                thing.setFlag(DAT_FLAG_NAMES.STACKABLE, true);
                break;
            case DAT_FLAGS_740_750.MULTI_USE:
                thing.setFlag(DAT_FLAG_NAMES.MULTI_USEABLE, true);
                break;
            case DAT_FLAGS_740_750.FORCE_USE:
                thing.setFlag(DAT_FLAG_NAMES.FORCE_USE, true);
                break;
            case DAT_FLAGS_740_750.WRITABLE:{
                    const length = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.WRITABLE, { length });
                }
                break;
            case DAT_FLAGS_740_750.WRITABLE_ONCE:{
                    const length = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.WRITABLE_ONCE, { length });
                }
                break;
            case DAT_FLAGS_740_750.FLUID_CONTAINER:
                thing.setFlag(DAT_FLAG_NAMES.FLUID_CONTAINER, true);
                break;
            case DAT_FLAGS_740_750.FLUID:
                thing.setFlag(DAT_FLAG_NAMES.FLUID, true);
                break;
            case DAT_FLAGS_740_750.UNPASSABLE:
                thing.setFlag(DAT_FLAG_NAMES.UNPASSABLE, true);
                break;
            case DAT_FLAGS_740_750.UNMOVABLE:
                thing.setFlag(DAT_FLAG_NAMES.UNMOVABLE, true);
                break;
            case DAT_FLAGS_740_750.BLOCK_MISSILE:
                thing.setFlag(DAT_FLAG_NAMES.BLOCK_MISSILE, true);
                break;
            case DAT_FLAGS_740_750.BLOCK_PATHFINDER:
                thing.setFlag(DAT_FLAG_NAMES.BLOCK_PATHFINDER, true);
                break;
            case DAT_FLAGS_740_750.PICKUPABLE:
                thing.setFlag(DAT_FLAG_NAMES.PICKUPABLE, true);
                break;
            case DAT_FLAGS_740_750.LIGHT_INFO:{
                    const level = this.readUint16LE();
                    const color = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.LIGHT_INFO, { level, color });
                }
                break;
            case DAT_FLAGS_740_750.FLOOR_CHANGE:
                thing.setFlag(DAT_FLAG_NAMES.FLOOR_CHANGE, true);
                break;
            case DAT_FLAGS_740_750.FULL_GROUND:
                thing.setFlag(DAT_FLAG_NAMES.FULL_GROUND, true);
                break;
            case DAT_FLAGS_740_750.HAS_ELEVATION:{
                    const height = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.HAS_ELEVATION, { height });
                }
                break;
            case DAT_FLAGS_740_750.HAS_OFFSET:{
                    const offsetX = 8;
                    const offsetY = 8;
                    thing.setFlag(DAT_FLAG_NAMES.HAS_OFFSET, { offsetX, offsetY });
                }
                break;
            case DAT_FLAGS_740_750.UNKNOWN:
                break;
            case DAT_FLAGS_740_750.MINIMAP:{
                    const color = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.MINIMAP, { color });
                }
                break;
            case DAT_FLAGS_740_750.ROTATABLE:
                thing.setFlag(DAT_FLAG_NAMES.ROTATABLE, true);
                break;
            case DAT_FLAGS_740_750.LYING_OBJECT:
                thing.setFlag(DAT_FLAG_NAMES.LYING_OBJECT, true);
                break;
            case DAT_FLAGS_740_750.HANGABLE:
                thing.setFlag(DAT_FLAG_NAMES.HANGABLE, true);
                break;
            case DAT_FLAGS_740_750.VERTICAL:
                thing.setFlag(DAT_FLAG_NAMES.VERTICAL, true);
                break;
            case DAT_FLAGS_740_750.HORIZONTAL:
                thing.setFlag(DAT_FLAG_NAMES.HORIZONTAL, true);
                break;
            case DAT_FLAGS_740_750.ALWAYS_ANIMATE:
                thing.setFlag(DAT_FLAG_NAMES.ALWAYS_ANIMATE, true);
                break;
            case DAT_FLAGS_740_750.LENS_HELP:{
                    const value = this.readUint16LE();
                    thing.setFlag(DAT_FLAG_NAMES.IS_LENS_HELP, { value });
                }
                break;
        }
    }
}