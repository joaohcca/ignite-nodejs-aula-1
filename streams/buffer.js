//buffer é uma representação da memória do PC
//é uma forma de salvar e ler informações muito rápida
//tabela ASCII pode ser vista em hex, se por em json é mostrado em decimal

const buf = Buffer.from("hello");

console.log(buf.toJSON());
