export interface IDatFlag {
    property: string;
    attributes: {
        name: string,
        uint: number
    }[]
}

export interface IDatThingFlags {
    ground?: IDatThingGroundFlag;
    groundBorder?: boolean;
    onBottom?: boolean;
    onTop?: boolean;
    container?: boolean;
    stackable?: boolean;
    multiUseable?: boolean;
    forceUse?: boolean;
    writable?: IDatThingWritableFlag;
    writableOnce?: IDatThingWritableFlag;
    fluidContainer?: boolean;
    fluid?: boolean;
    unpassable?: boolean;
    unmovable?: boolean;
    blockMissile?: boolean;
    blockPathfinder?: boolean;
    pickupable?: boolean;
    lightInfo?: IDatThingLightInfoFlag;
    floorChange?: boolean;
    fullGround?: boolean;
    hasElevation?: IDatThingElevationFlag;
    hasOffset?: IDatThingOffset;
    minimap?: IDatThingMinimapFlag;
    rotatable?: boolean;
    lyingObject?: boolean;
    hangable?: boolean;
    vertical?: boolean;
    horizontal?: boolean;
    alwaysAnimate?: boolean;
    isLensHelp?: IDatThingLensHelpFlag;
    dontHide?: boolean;
}

export interface IDatThingGroundFlag {
    speed: number;
}

export interface IDatThingWritableFlag {
    length: number;
}

export interface IDatThingLightInfoFlag {
    level: number;
    color: number;
}

export interface IDatThingElevationFlag {
    height: number;
}

export interface IDatThingMinimapFlag {
    color: number;
}

export interface IDatThingLensHelpFlag {
    value: number;
}

export interface IDatThingTexture {
    width: number;
    height: number;
    layers: number;
    patternX: number;
    patternY: number;
    patternZ: number;
    animations: number;
    realSize: number;
    exactSize: number;
}

export interface IDatThingOffset {
    offsetX: number;
    offsetY: number;
}

export interface IDatWriterOptions {
    signature: string;
    version: number;
}