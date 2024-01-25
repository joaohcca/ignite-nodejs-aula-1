import http from "node:http";

// HTTP Methods
//GET, POST, PUT, PATCH, DELETE

//GET => Buscar um recurso no backend
//POST => Criar um recurso no backend
//PUT => Atualizar um recurso no backend
//PATCH => Atualizar uma info específica no back-end
//DELETE => Deletar um recurso no backend

//GET /users => Lista os usuários
//POST /users => Lista os usuários

//Statefull (salva em memória) - Stateless (salva em banco)

//JSON - JavaScript Object Notation

//HEADERS - são metadadosque adicionam contexto aos dados transitados nos requests

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    res.setHeader("content-type", "application/json");
    return res.end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "Fulano de Tal",
      email: "fulanodetal@examplo.com",
    });

    return res.end(JSON.stringify(users));
  }

  return res.end("Hello Code 2");
});

server.listen(3333);
