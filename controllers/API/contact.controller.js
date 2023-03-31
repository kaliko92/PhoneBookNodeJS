const { response } = require('express');
const Validator = require('fastest-validator');
const { async } = require('parse/lib/browser/Storage');
const { sequelize } = require('../../models');
const message = require('../../helper/message');
const models = require('../../models');

async function save(req, res,next){
    const contact =  ({
        type: req.body.type,               
        value: req.body.value, 
        personId: parseInt(req.body.personId), 
    });

    const schema = {
        type: {type:"string", optional:false, min:"1", max:"100"},
        value: {type:"string", optional:false, min:"1", max:"100"},
        personId: {type:"number", optional:false},
    }
    const v = new Validator();
    const validationResponse = v.validate(contact, schema);

    if(validationResponse !== true){
        message.responseFailure(res, 400, "Validation failed", validationResponse); 
        return;       
    }
    
    models.contact.create(contact).then(result=>{
        message.responseSuccess(res, 201, result);
    }).catch(error=>{
        message.responseFailure(res, 500, "Something went wrong", error);
    }); 
}

// show contact
function show(req, res) {
    const id = req.params.id;    
    
    models.contact.findAll({where: {id:id}}).then(result =>{
        if(result){
            message.responseSuccess(res, 200, result);
        }else{
            message.responseFailure(res, 404, "Contact not found!", error);
        }
    }).catch(error=>{
        message.responseFailure(res, 500, "Something went wrong!");
    });
  
}

function index(req, res) {
    models.contact.findAll().then(result =>{
        message.responseSuccess(res, 200, result);
    }).catch(error=>{
        message.responseFailure(res, 500, "Something went wrong!", error);
    });
}

async function update(req, res) {
    const id = req.params.id;
    const updatedContact = ({
        type: req.body.type,               
        value: req.body.value, 
        personId: parseInt(req.body.personId),
    });

    const schema = {
        type: {type:"string", optional:false, min:"1", max:"100"},
        value: {type:"string", optional:false, min:"1", max:"100"},
        personId: {type:"number", optional:false},
    }


    let isExist = await models.contact.count({where:{id:id}});
    if(isExist==0){
        message.responseFailure(res, 400, "This contact doesn't found");
        return;
    }

    const v = new Validator();
    const validationResponse = v.validate(updatedContact, schema);

    if(validationResponse !== true){
        message.responseFailure(res, 400, "Validation failed!", validationResponse);
        return;
    }  

    models.contact.update(updatedContact, {where: {id:id}}).then(result =>{
        message.responseSuccess(res, 200, updatedContact);
    }).catch(error=>{
        message.responseFailure(res, 500, "Something went wrong!", error);
    });

    
}


async function destroy(req, res) {
    const id = req.params.id;

    models.contact.destroy({where:{id:id}}).then(result=>{
        message.responseSuccess(res, 200, {});
    }).catch(error=>{
        message.responseFailure(res, 500, "Something went wrong!", error);
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