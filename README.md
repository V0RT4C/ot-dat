# OT-DAT

A simple library written in TypeScript for reading and writing Tibia .DAT files.
Supported versions 7.40 -> 7.72

## Description

This library can be used for multiple things. For example, it would work perfectly together with
my other library (ot-spr) for creating a modern web based object builder.

## Getting Started

### Dependencies

The library should work for most JavaScript engines. Both on the frontend and the backend.  
****NodeJS***  
****Deno***  
****Web Browser***  

### Installing

NodeJS:
```sh
npm install @v0rt4c/ot-dat
```

Deno:
```sh
import { DatReader, DatWriter } from 'https://deno.land/x/v0rt4c_dat@0.1.0/mod.ts';
```

### Usage

NodeJS:
```js
import { DatReader, DatWriter } from '@v0rt4c/ot-dat';
import fs from 'fs';

const datBuffer = fs.readFileSync('Tibia.dat');

//Read dat file to a JS object
const reader = DatReader(datBuffer);
const datObject = reader.parse();

//Write JS object back to a dat file
const writer = DatWriter(datObject, { version: 760, signature: '439D5A33' });
const newDatBuffer = writer.write();
fs.writeFileSync('NewTibia.dat', newDatBuffer);
```

Deno:
```ts
import { DatReader, DatWriter, DAT_SIGNATURES } from 'https://deno.land/x/v0rt4c_dat@0.1.0/mod.ts';

const datBuffer = Deno.readFileSync('Tibia.dat');

//Read dat file to a JS object
const reader = DatReader(datBuffer);
const datObject = reader.parse();

//Write JS object back to a dat file
const writer = DatWriter(datObject, { version: 760, signature: DAT_SIGNATURES[760] });
const newDatBuffer = writer.write();
Deno.writeFileSync('NewTibia.dat', newDatBuffer);
```

## Authors

[@V0RT4C](https://github.com/V0RT4C)

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Bugs
Please report bugs in the github repo.