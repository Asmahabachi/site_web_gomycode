const express = require('express');
const auth = express.Router();
const {authSignUp,authSignIn} = require("../controllers/contact.controller");
const { isAuth } = require('../middleware/isAuth');
const {isValid,validationSignUp,validationSignIn} = require('../middleware/validation')



auth.post('/signUp',validationSignUp,isValid ,authSignUp )
auth.post('/signin',validationSignIn, isValid,authSignIn)

auth.get('/current', isAuth, (req,res) =>{
    res.send(req.user)
});



module.exports = auth;





