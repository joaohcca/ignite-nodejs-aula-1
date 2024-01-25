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

//HTTP Status Code
// Information - 100~199
// Sucess - 200~299
// Redirection - 300~399
// Client Error - 400~499
// Server Error - 500~599

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

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
