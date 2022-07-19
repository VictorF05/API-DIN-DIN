const express = require("express");
const cursosController = require("../controllers/cursosController");
const cursosCreateValidation = require("../Validations/Cursos/Criar");
const routes = express.Router();

routes.get("/cursos", cursosController.listarTodos);
routes.get("/cursos/:id", cursosController.listarUm);
routes.post("/cursos", cursosCreateValidation, cursosController.cadastrar);
routes.delete("/cursos/:id", cursosController.deletar);
routes.put("/cursos/:id", cursosController.atualizar);

module.exports = routes;