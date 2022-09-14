import { DatThing } from './../lib/DatThing.class.ts';

export class ThingContainer {
    private _signature! : number;
    private _itemCount! : number;
    private _looktypeCount! : number;
    private _effectsCount! : number;
    private _missilesCount! : number;

    private _items : DatThing[] = [];
    private _looktypes : DatThing[] = [];
    private _effects : DatThing[] = [];
    private _missiles : DatThing[] = [];
    
    public get signature() : number {
        return this._signature;
    }
    
    public set signature(value : number) {
        this._signature = value;
    }

    public get signatureHexString() : string {
        return this._signature.toString(16).toUpperCase();
    }

    public get itemCount() : number {
        return this._items.length + 99;
    }
    
    public get looktypeCount() : number {
        return this._looktypes.length;
    }
    
    public get effectsCount() : number {
        return this._effects.length;
    }
    
    public get missilesCount() : number {
        return this._missiles.length;
    }

    public get items() : DatThing[] {
        return this._items;
    }

    public set items(data : DatThing[]) {
        this._items = data;
    }

    public get looktypes() : DatThing[] {
        return this._looktypes;
    }

    public set looktypes(data : DatThing[]) {
        this._looktypes = data;
    }

    public get effects() : DatThing[] {
        return this._effects;
    }

    public set effects(data : DatThing[]) {
        this._effects = data;
    }

    public get missiles() : DatThing[] {
        return this._missiles;
    }

    public set missiles(data : DatThing[]) {
        this._missiles = data;
    }
}