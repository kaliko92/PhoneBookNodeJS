const { response } = require('express');
const Validator = require('fastest-validator');
const { async } = require('parse/lib/browser/Storage');
const { sequelize } = require('../models');
const models = require('../models');

async function save(req, res,next){
    const person =  ({
        name: req.body.name,               
    });

    const schema = {
        name: {type:"string", optional:false, min:"1", max:"100"},
    }
    const v = new Validator();
    const validationResponse = v.validate(person, schema);

    if(validationResponse !== true){
        ResponseFailure(res, 400, "Validation failed", validationResponse); 
        return;       
    }
    
    models.person.create(person).then(result=>{
        ResponseSuccess(res, 201, result);
    }).catch(error=>{
        ResponseFailure(res, 500, "Something went wrong", error);
    }); 
}

// show person
function show(req, res) {
    const id = req.params.id;    
    
    models.person.findAll({where: {id:id}}).then(result =>{
        if(result){
            ResponseSuccess(res, 200, result);
        }else{
            ResponseFailure(res, 404, "Person not found!", error);
        }
    }).catch(error=>{
        ResponseFailure(res, 500, "Something went wrong!");
    });
  
}

function index(req, res) {
    models.person.findAll().then(result =>{
        ResponseSuccess(res, 200, result);
    }).catch(error=>{
        ResponseFailure(res, 500, "Something went wrong!", error);
    });
}

async function update(req, res) {
    const id = req.params.id;
    const updatedPerson = ({
        name: req.body.name
    });

    const schema = {
        name: {type:"string", optional:false,min:"1", max:"100"},
    }


    let isExist = await models.person.count({where:{id:id}});
    if(isExist==0){
        ResponseFailure(res, 400, "This person doesn't found");
        return;
    }

    const v = new Validator();
    const validationResponse = v.validate(updatedPerson, schema);

    if(validationResponse !== true){
        ResponseFailure(res, 400, "Validation failed!", validationResponse);
        return;
    }  

    models.person.update(updatedPerson, {where: {id:id}}).then(result =>{
        ResponseSuccess(res, 200, updatedPerson);
    }).catch(error=>{
        ResponseFailure(res, 500, "Something went wrong!", error);
    });

    
}


async function destroy(req, res) {
    const id = req.params.id;

    models.person.destroy({where:{id:id}}).then(result=>{
        ResponseSuccess(res, 200, {});
    }).catch(error=>{
        ResponseFailure(res, 500, "Something went wrong!", error);
    });
}

function ResponseFailure(res, status, failureMessage, failureResult) {
    return res.status(status).json({
        status: status,
        successResult:{},
        failureMessage: failureMessage,
        failureResult: failureResult
    });
}
function ResponseSuccess(res, status, successResult) {
    return res.status(status).json({
        status: status,
        successResult:successResult,
        failureMessage: "",
        failureResult: {}
    });
}
module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy,
    // upload: upload
}