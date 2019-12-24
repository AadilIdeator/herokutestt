let expess = require('express');
let momgoose = require('mongoose');
let Pcontact = require('../Schema/contactModel')
let router = expess.Router();
router.get("/pageIndex/:id", async (req, res) => {
    let perPage = 9;
    let page = req.params.id || 1;
    let pageData = await Pcontact.contacts
      .find({})
      .skip(perPage * page - perPage)
      .limit(perPage);
    let dataCount = await Pcontact.contacts
    .find({}).count();
    let pageSize = Math.ceil(dataCount / perPage);
    res.send({
      perPage: perPage,
      currentPage: page,
      dataLimit: pageData,
      dataCount: dataCount,
      pageSize: pageSize
    });
  });

  module.exports = router;