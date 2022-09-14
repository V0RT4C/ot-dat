import { DAT_SIGNATURES } from './../const.ts';
import { DatFileReader_740_750 } from './DatFileReader_740_750.class.ts';
import { DatFileReader_755_772 } from './DatFileReader_755_772.class.ts';

export const DatReader = (datBuffer : Uint8Array, version? : number) => {
    const errorMessage = `
    Not a valid DAT file or DAT file not supported. 
    If you have changed the signature but the structure 
    of the DAT file conforms to a specific DAT version you 
    have to manually provide the version as the second 
    parameter to the factory function.
    Valid version values are between 740 and 772.`;

    const signature = (((datBuffer[0]) |
    (datBuffer[1] << 8) |
    (datBuffer[2] << 16)) +
    (datBuffer[3] * 0x1000000)).toString(16).toUpperCase();

    console.log(signature);

    const signatures = Object.entries(DAT_SIGNATURES);

    for (const [key, value] of signatures){
        if (value === signature){
            version = Number(key);
            break;
        }
    }

    if (!version){
        throw new Error(errorMessage);
    }

    if (version >= 740 && version <= 750){
        return new DatFileReader_740_750(datBuffer);
    }
    else if (version >= 755 && version <= 772){
        return new DatFileReader_755_772(datBuffer);
    }
    else {
        throw new Error(errorMessage);
    }
}