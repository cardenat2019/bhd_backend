const Comments        = require('../models/comments.model');
const sequelize       = require('../utils/database');

exports.getList = (request, response) => {

    let query = "select * from public.fn_bhd_comments_getlist() as result ";

    sequelize.query(query, 
        { 
            type: sequelize.QueryTypes.SELECT,
            raw: true
        },
        {
          mapToModel: false
        } 
    ).then(records => {
        let result = JSON.parse(records[0].result);
        response.status(200).send({
            ok: true,
            message: 'Comentarios encontrados',
            result: result
        });
    }).catch(error=>{
        response.status(500).send({
            ok: false,
            message: 'Error al tratar de buscar Comentarios',
            result: error
        });
    });
};

exports.getOne = (request, response) => {

    const { id } = request.params;

    let iid = parseInt(id);

    let query = "select * from public.fn_bdh_comments_getone(:iid) as result ";

    sequelize.query(query, 
        { 
            replacements: {
                iid
            },
            type: sequelize.QueryTypes.SELECT,
            raw: true
        },
        {
          mapToModel: false
        }            
    ).then(record => {
        console.log(record);
        if(record!==null){
            let result = JSON.parse(record.result);
            response.status(200).send({
                ok: true,
                message: 'Comentario encontrado',
                result: result
            });
        }else
            response.status(400).send({
                ok: false,
                message: 'Comentario no encontrado',
                result: record
            });
    }).catch(error=>{
        console.log(error);
        response.status(500).send({
            ok: false,
            message: 'Error al tratar de buscar Commentario',
            result: error
        });
    });
}

// Método para Crear Registros de Comentario.
exports.create = (request, response) => {
    const {content, 
           name, 
           email, 
           website
          } = request.body;
          
    Comments.create({
            content, 
            name, 
            email, 
            website
        })
        .then(record=>{
            return response.status(201).json({
                ok: true,
                message: 'Comentario creado exitosamente.', 
                result: record
            })
        }).catch(err=>{
            return response.status(500).json({
            ok: false,
            message: 'Error al crear comentario',
            result: err
        });
    }).catch(err=>{
        return response.status(500).json({
            ok: false,
            message: 'Error al crear Comentario',
            result: err
        })
    })
}

// Método para Modificar Registros de Comentario
exports.update = (request, response) => {
    const {id}   = request.params;

    const {
            content,
            name,
            email,
            website
          } = request.body;
    Comments.update({
            content,
            name,
            email,
            website},
        {where : {id}}
    )
    .then(result=>{
        response.status(200).json({
            ok: true,
            message: 'Comentario actualizado exitosamente.',
            result: result
        });
    })
    .catch(err=>{
        response.status(500).json({
            ok: false,
            message: 'No se pudo actualizar Comentario.',
            result: err
        });
    });
}