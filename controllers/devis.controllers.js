const devisShcema = require("../models/DevisModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

exports.addDevis = async (req, res) => {
    const {nom,prenon,telephone,password,email,adresse,superficie,motif} = req.body
    

        try {
            const addDevis = new devisSchema(req.body)
            await addDevis.save();
            res.status(200).send({msg: ' person who choose an offer added successfully'})
            } catch (error) {  res.status(400).send({msg:"could not SAVE"})
        }
            }
 


exports.afficheDevis =  async (req,res)=>{
    try {
       const Persons =  await devisSchema.find();
        res.status(200).send({msg:"list",Persons});
    } catch (error) {
        res.status(500).send({msg:"could not list"})
    }
}
