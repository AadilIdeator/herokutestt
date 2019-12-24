const express =require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
let port = process.env.PORT || 8080 || 4005;
let contact = require('./Apis/contactApi');
// let user = require('./Apis/testapi');
let pagi = require('./Apis/pagination');
app.use('/api/pagi',pagi);
app.use('/api/contacts',contact);
// app.use('/api/user',user);


mongoose.connect('mongodb://localhost/myProdemo',{useNewUrlParser: true,useUnifiedTopology:true})
.then(()=> console.log('connected to database'))
.catch(err => console.log('something went wrong',err))
app.listen(port, () => console.log(`server working on port number: ${port}`));
