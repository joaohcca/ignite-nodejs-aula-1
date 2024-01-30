// Netflix & Spotify => Writable Streams

// Importação de clients via CSV (Excel)
// 1Gb  - 1KK linhas
// Post /upload import.csv

// 10mb/s - 100s

// 100s -> Inserções no banco de dados -> Readable Streams

// 10mb/s -> 10.000

//Readable Streams // Writable Streams

// Toda porta de entrada e saída é uma stream no node

//conectar as streams

//existe tambem a stream duplex que tem os metodos _read e

import { Readable, Writable, Transform } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;
    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }
    }, 1000);
  }
}

class MultiplybyTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

class MultiplybyMinusOneStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;
    callback(null, Buffer.from(String(transformed)));
  }
}
new OneToHundredStream()
  .pipe(new MultiplybyMinusOneStream())
  .pipe(new MultiplybyTenStream());
