let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let joi = require("@hapi/joi");


let Contact = require("../Schema/contactModel");
// console.log(Contact);


router.post('/addcontact',async (req,res) =>{
  let rs = Contact.ValidationError(req.body);
  if (rs.error) {return res.status(403).send(rs.error.details[0].message);}
  
  // console.log(Contact.contactSchema.email);
 
  let data = new Contact.contacts({
    username:req.body.username,
    email:req.body.email,
    contactNo:req.body.contactNo,
    password:req.body.password
  });
  let result = await data.save();
  res.send({message:'data stored succesfully',item:result});
});

router.get('/getcontact',async (req,res) =>{
  let allcontact = await Contact.contacts.find();
  res.send({item: allcontact});
})
module.exports =router;




