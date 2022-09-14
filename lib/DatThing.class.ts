import { IDatThingFlags, IDatThingTexture } from './../types.ts';
import { DAT_TEXTURE_NAMES } from './../const.ts';

export class DatThing {
    constructor(protected readonly _thingId : number){}

    public spriteIds : number[] = [];
    public flags : IDatThingFlags = {};
    public texture : IDatThingTexture = {
        [DAT_TEXTURE_NAMES.WIDTH]: 0,
        [DAT_TEXTURE_NAMES.HEIGHT]: 0,
        [DAT_TEXTURE_NAMES.LAYERS]: 0,
        [DAT_TEXTURE_NAMES.PATTERN_X]: 0,
        [DAT_TEXTURE_NAMES.PATTERN_Y]: 0,
        [DAT_TEXTURE_NAMES.PATTERN_Z]: 0,
        [DAT_TEXTURE_NAMES.ANIMATION]: 0,
        [DAT_TEXTURE_NAMES.REAL_SIZE]: 0,
        [DAT_TEXTURE_NAMES.EXACT_SIZE]: 0
    };

    public get id() : number {
        return this._thingId;
    }

    public get thingId() : number {
        return this._thingId;
    }
}