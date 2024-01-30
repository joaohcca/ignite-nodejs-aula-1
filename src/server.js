import http from "node:http";
import { randomUUID } from "node:crypto";
import { json } from "./middlewares/json.js";
import { Database } from "./database.js";

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

//UUID => Id único universal em string

const database = new Database();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  console.log(req.body);

  if (method === "GET" && url === "/users") {
    const users = database.select("users");

    return res.end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;
    database.insert("users", {
      id: randomUUID(),
      name,
      email,
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
