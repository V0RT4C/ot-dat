import { IDatThingElevationFlag, IDatThingFlags, IDatThingGroundFlag, IDatThingLensHelpFlag, IDatThingLightInfoFlag, IDatThingMinimapFlag, IDatThingOffset, IDatThingTexture, IDatThingWritableFlag } from './../types.ts';
import { DAT_FLAG_NAMES, DAT_TEXTURE_NAMES } from './../const.ts';

export class DatThing {
    constructor(protected readonly _thingId : number){}

    protected _spriteIds : number[] = [];
    protected _flags : IDatThingFlags = {};
    protected _texture : IDatThingTexture = {
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

    public get width() : number {
        return this._texture.width;
    }

    public get height() : number {
        return this._texture.height;
    }

    public get layers() : number {
        return this._texture.layers;
    }

    public get patternX() : number {
        return this._texture.patternX;
    }

    public get patternY() : number {
        return this._texture.patternY;
    }

    public get patternZ() : number {
        return this._texture.patternZ;
    }

    public get animations() : number {
        return this._texture.animations;
    }

    public get realSize() : number {
        return this._texture.realSize;
    }

    public get exactSize() : number {
        return this._texture.exactSize;
    }

    public get ground() : boolean {
        return this._flags.ground !== undefined;
    }

    public get groundSpeed() : number {
        if (this.ground){
            return (this._flags.ground as IDatThingGroundFlag).speed;
        }else{
            return -1;
        }
    }

    public get groundBorder() : boolean {
        return this._flags.groundBorder !== undefined;
    }

    public get onBottom() : boolean {
        return this._flags.onBottom === true;
    }

    public get onTop() : boolean {
        return this._flags.onTop === true;
    }

    public get container() : boolean {
        return this._flags.container === true;
    }

    public get stackable() : boolean {
        return this._flags.stackable === true;
    }

    public get multiUsable() : boolean {
        return this._flags.multiUseable === true;
    }

    public get forceUse() : boolean {
        return this._flags.forceUse === true;
    }

    public get writable() : boolean {
        return this._flags.writable !== undefined;
    }

    public get writableOnce() : boolean {
        return this._flags.writableOnce !== undefined;
    }

    public get writableLength() : number {
        if (this.writable){
            return (this._flags.writable as IDatThingWritableFlag).length;
        }
        else if (this.writableOnce){
            return (this._flags.writableOnce as IDatThingWritableFlag).length;
        }
        else {
            return -1;
        }
    }

    public get fluidContainer() : boolean {
        return this._flags.fluidContainer === true;
    }

    public get fluid() : boolean {
        return this._flags.fluid === true;
    }

    public get unpassable() : boolean {
        return this._flags.unpassable === true;
    }

    public get unmovable() : boolean {
        return this._flags.unmovable === true;
    }

    public get blockMissile() : boolean {
        return this._flags.blockMissile === true;
    }

    public get blockPathfinder() : boolean {
        return this._flags.blockPathfinder === true;
    }

    public get pickupable() : boolean {
        return this._flags.pickupable === true;
    }

    public get lightInfo() : boolean {
        return this._flags.lightInfo !== undefined;
    }

    public get hasLight() : boolean {
        return this.lightInfo;
    }

    public get lightColor() : number {
        if (this.hasLight){
            return (this._flags.lightInfo as IDatThingLightInfoFlag).color;
        }else{
            return -1;
        }
    }

    public get lightLevel() : number {
        if (this.hasLight){
            return (this._flags.lightInfo as IDatThingLightInfoFlag).level;
        }else{
            return -1;
        }
    }

    public get floorChange() : boolean {
        return this._flags.floorChange === true;
    }

    public get fullGround() : boolean {
        return this._flags.fullGround === true;
    }

    public get hasElevation() : boolean {
        return this._flags.hasElevation !== undefined;
    }

    public get elevation() : number {
        if (this.hasElevation){
            return (this._flags.hasElevation as IDatThingElevationFlag).height;
        }else{
            return -1;
        }
    }

    public get hasOffset() : boolean {
        return this._flags.hasOffset !== undefined;
    }

    public get offsetX() : number {
        if (this.hasOffset){
            return (this._flags.hasOffset as IDatThingOffset).offsetX;
        }else{
            return -1;
        }
    }

    public get offsetY() : number {
        if (this.hasOffset){
            return (this._flags.hasOffset as IDatThingOffset).offsetY;
        }else{
            return -1;
        }
    }

    public get minimap() : boolean {
        return this._flags.minimap !== undefined;
    }

    public get minimapColor() : number {
        if (this.minimap){
            return (this._flags.minimap as IDatThingMinimapFlag).color;
        }else{
            return -1;
        }
    }

    public get rotatable() : boolean {
        return this._flags.rotatable === true;
    }

    public get lyingObject() : boolean {
        return this._flags.lyingObject === true;
    }

    public get hangable() : boolean {
        return this._flags.hangable === true;
    }

    public get vertical() : boolean {
        return this._flags.vertical === true;
    }

    public get horizontal() : boolean {
        return this._flags.horizontal === true;
    }

    public get alwaysAnimate() : boolean {
        return this._flags.alwaysAnimate === true;
    }

    public get isLensHelp() : boolean {
        return this._flags.isLensHelp !== undefined;
    }

    public get lensHelpValue() : number {
        if (this.isLensHelp){
            return (this._flags.isLensHelp as IDatThingLensHelpFlag).value;
        }else{
            return -1;
        }
    }

    public get spriteIds() : number[] {
        return this._spriteIds;
    }

    public addSpriteId(id : number) : void {
        this._spriteIds.push(id);
    }

    public setFlag(flagKey : DAT_FLAG_NAMES, flagValue : any) : void {
        this._flags[flagKey] = flagValue;
    }

    public setTexture(textureKey : DAT_TEXTURE_NAMES, textureValue : any) : void {
        this._texture[textureKey] = textureValue;
    }
}