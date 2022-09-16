import { DatThing } from './../lib/DatThing.class.ts';

export class ThingContainer {
    public signature! : number;

    public items : DatThing[] = [];
    public looktypes : DatThing[] = [];
    public effects : DatThing[] = [];
    public missiles : DatThing[] = [];

    public get signatureHexString() : string {
        return this.signature.toString(16).toUpperCase();
    }

    public get itemCount() : number {
        return this.items.length + 99;
    }

    public get looktypeCount() : number {
        return this.looktypes.length;
    }

    public get effectsCount() : number {
        return this.effects.length;
    }

    public get missilesCount() : number {
        return this.missiles.length;
    }
}