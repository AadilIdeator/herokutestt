let mongoose = require('mongoose');
let express =require('express');
let joi = require('@hapi/joi');

let contactSchema = new mongoose.Schema({
    username:{type:String,required:true,min:5,max:50},
    email:{type:String,required:true,min:5,max:50},
    contactNo:{type:Number,required:true},
    password:{type:String,required:true}
});

let contacts = mongoose.model('contacts',contactSchema);

function ValidationError(message){
    let schema = joi.object().keys({
        username:joi.string().required().min(5).max(50),
        email:joi.string().required().min(5).max(50),
        contactNo:joi.string().required(),
        password:joi.string().required()
    })
    return schema.validate(message);
}

module.exports= {contacts,ValidationError,contactSchema};