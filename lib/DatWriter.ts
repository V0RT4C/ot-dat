import { IDatWriterOptions } from './../types.ts';
import { DAT_SIGNATURES } from './../const.ts';
import { DatFileWriter_740_750 } from './DatFileWriter_740_750.class.ts';
import { ThingContainer } from './ThingContainer.ts';
import { DatFileWriter_755_772 } from './DatFileWriter_755_772.class.ts';

export const DatWriter = (things: ThingContainer, opts: IDatWriterOptions = { signature: DAT_SIGNATURES[740], version: 740 }) => {
    const errorMessage = `Compiling/writing is only supported to DAT formats used in Tibia clients 740 -> 772.`;

    if (opts.version >= 740 && opts.version <= 750){
        return new DatFileWriter_740_750(things, opts);
    }
    else if (opts.version >= 755 && opts.version <= 772){
        return new DatFileWriter_755_772(things, opts);
    }
    else {
        throw new Error(errorMessage);
    }
}