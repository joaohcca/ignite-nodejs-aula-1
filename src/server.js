import http from "node:http";

import { json } from "./middlewares/json.js";
import { Database } from "./database.js";
import { routes } from "./routes.js";
import { extractQueryParams } from "./utils/extract-query-params.js";

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

//Query Parameters: URL Stateful => Filtros, paginação, não-obrigatórios
// Get http://localhost:3333/users?userId=1&name=Joao
//Route Parameters => Identificação de recurso
// Delete http://localhost:3333/users/1
//Request Body: Envio de informações de um formulário (HTTPs )
//

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    const routeParams = req.url.match(route.path);

    const { query, ...params } = routeParams.groups;
    req.params = params;
    req.query = query ? extractQueryParams(query) : {};

    route.handler(req, res);
  }
});

server.listen(3333);
