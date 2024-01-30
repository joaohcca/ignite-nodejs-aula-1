//middlewares sao interceptadores que recebem os req e res;
//sao funcoes que interrompem o fluxo de execução normal do código

//essa função garante que tudo que entra e sai via os requests sao do tipo json
export async function json(req, res) {
  const buffers = [];
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  res.setHeader("Content-type", "application.json");
}
