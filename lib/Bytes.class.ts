/**
 * Version 2.00
 */

 export class Bytes extends Uint8Array {
    private _position : number = 0;
    private _highest_position : number = 0;

    public get position() : number {
        return this._position;
    }

    public get highestPosition() : number {
        return this._highest_position;
    }

    public set highestPosition(value : number) {
        this._highest_position = value;
    }

    public seek(offset: number){
        this._position = offset;
    }

    public skip(amount : number) : void {
        this._position = this._position+=amount;
        checkHighestPosition(this);
    }

    public eof() : boolean {
        return this._position === this.byteLength;
    }

    public isOutOfBounds(amount : number) : boolean {
        return (this._position + amount) > this.byteLength;
    }

    public writeUint8(value : number, offset? : number) : void {
        checkInt(value, 0, 255);

        this._position = (offset || offset === 0) ? offset : this._position;

        this[this._position] = value & 0xFF;
        this._position++;
        checkHighestPosition(this);
    }

    public writeUint16LE(value : number, offset?: number) : void {
        checkInt(value, 0, 65535);

        this._position = (offset || offset === 0) ? offset : this._position;
        this[this._position] = (value & 0xff)
        this[this._position + 1] = (value >>> 8)
        this._position+=2;
        checkHighestPosition(this);
    }

    public writeUint32LE(value : number, offset?: number) : void {
        checkInt(value, 0, 4294967295);

        this._position = (offset || offset === 0) ? offset : this._position;
        this[this._position + 3] = (value >>> 24)
        this[this._position + 2] = (value >>> 16)
        this[this._position + 1] = (value >>> 8)
        this[this._position] = (value & 0xff)
        this._position+=4;
        checkHighestPosition(this);
    }

    public writeBytes(bytes : Uint8Array, offset : number) : void {
        //Write bytes
        for (let i=0; i < bytes.byteLength; i++){
            this[offset+i] = bytes[i];
        }

        this._position = bytes.byteLength + offset;
        checkHighestPosition(this);
    }

    public readBytes(amount: number, offset?: number){
        this._position = (offset || offset === 0) ? offset : this._position;
        let bytes = new Array();
        for (let i=0; i < amount; i++){
            bytes[i] = this[this._position + 1];
        }

        this._position+=amount;
        return new Uint8Array(bytes);
    }

    public readUint8(offset?: number) : number {
        this._position = (offset || offset === 0) ? offset : this._position;
        const val = this[this._position] & 0xFF;
        this._position++;
        checkHighestPosition(this);
        return val;
    }

    public readUint16LE(offset? : number) : number {
        this._position = (offset || offset === 0) ? offset : this._position;
        const val = this[this._position] | (this[this._position + 1] << 8);
        this._position+=2;
        checkHighestPosition(this);
        return val;
    }

    public readUint32LE(offset?: number) : number {
        this._position = (offset || offset === 0) ? offset : this._position;
        const val = ((this[this._position]) |
        (this[this._position + 1] << 8) |
        (this[this._position + 2] << 16)) +
        (this[this._position + 3] * 0x1000000)
        this._position+=4;
        checkHighestPosition(this);
        return val;
    }

    public peekint8(offset?: number) : number {
        const val = ((0xff - this[(offset || offset === 0) ? offset : this._position] + 1) * -1);
        return val;
    }

    public peekUint8(offset?: number) : number {
        const val = this[(offset || offset === 0) ? offset : this._position] & 0xFF;
        return val;
    }

    public peekUint16LE(offset?: number) : number {
        const pos : number = (offset || offset === 0) ? offset : this._position;
        const val = this[pos] | (this[pos + 1] << 8);
        return val;
    }

    public peekUint32LE(offset?: number) : number {
        const pos : number = (offset || offset === 0) ? offset : this._position;
        const val = ((this[pos]) |
        (this[pos + 1] << 8) |
        (this[pos + 2] << 16)) +
        (this[pos + 3] * 0x1000000)

        return val;
    }

    public static fromBuffer(buffer : Uint8Array) : Bytes {
        const dbuff : Bytes = new Bytes(buffer);
        return dbuff;
    }

    public toUint8Array() : Uint8Array {
        return new Uint8Array(this);
    }

    public toArrayBuffer() : ArrayBuffer {
        return this.buffer;
    }
}

function NotAnIntError(value : any) : Error {
    return new Error('Not an integer.' + 'Got: ' + value);
}

function IntSizeError(value : number, min : number, max : number) : Error {
    return new Error('Integer is out of bounds. Received ' + value + ' but integer has to be between ' + min + ' and ' + max);
}

function checkInt(value : number, min : number, max : number) : void {
    if (!Number.isInteger(value)){
        throw NotAnIntError(value)
    }

    if (value > max || value < min){
        throw IntSizeError(value, min, max);
    }
}

function checkHighestPosition(obj : Bytes) : void {
    if (obj.position > obj.highestPosition){
        obj.highestPosition = obj.position;
    }
}