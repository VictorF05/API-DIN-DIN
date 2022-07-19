const { Cursos } = require("../models");

const cursosController = {
    async listarUm(req, res){
        try{
            const { id } = req.params;

            const curso = await Cursos.findOne({
                where: {
                    id,
                },
            });
    
            res.status(200).json(curso);
        }
        catch(error){
            return res.status(500).json("Ocorreu algum problema");
        }
    },

    async listarTodos(req, res){
        try{
            const listaDeCursos = await Cursos.findAll();
    
            res.status(200).json(listaDeCursos);
        }
        catch(error){
            return res.status(500).json("Ocorreu algum problema");
        }
    },

    async cadastrar(req, res){
        try{
            const { titulo, descricao, professor } = req.body;

            const novoCurso = await Cursos.create({
                titulo, 
                descricao, 
                professor,
            });
    
            res.status(201).json(novoCurso);
        }
        catch(error){
            return res.status(500).json("Ocorreu algum problema");    
        }
    },

    async deletar(req, res){
        try{
            const { id } = req.params;

            await Cursos.destroy({
                where: {
                    id,
                },
            });
    
            res.status(204).json();
        }
        catch(error){
            return res.status(500).json("Ocorreu algum problema");
        }  
    },

    async atualizar(req, res){
        try{
            const { id } = req.params;
            const { titulo, descricao, professor } = req.body;
    
            if (!id) return res.status(400).json("id não enviado");
    
            await Cursos.update(
                {
                    titulo,
                    descricao,
                    professor,
                },
                {
                    where: {
                        id,
                    },
                }
            );
    
            res.status(200).json("Curso atualizado com sucesso");
        }
        catch(error){
            return res.status(500).json("Ocorreu algum problema");
        }
    },
};

module.exports = cursosController;