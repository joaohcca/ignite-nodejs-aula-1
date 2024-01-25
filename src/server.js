import http from "node:http";

// HTTP Methods
//GET, POST, PUT, PATCH, DELETE

//GET => Buscar um recurso no backend
//POST => Criar um recurso no backend
//PUT => Atualizar um recurso no backend
//PATCH => Atualizar uma info específica no back-end
//DELETE => Deletar um recurso no backend

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res.end("Listagem de usuários");
  }

  if (method === "POST" && url === "/users") {
    return res.end("Criação de usuários");
  }

  return res.end("Hello Code 2");
});

server.listen(3333);
