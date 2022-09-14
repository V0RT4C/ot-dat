import { DatThing } from './../lib/DatThing.class.ts';

export class ThingContainer {
    public signature! : number;
    public looktypeCount! : number;
    public effectsCount! : number;
    public missilesCount! : number;

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
}