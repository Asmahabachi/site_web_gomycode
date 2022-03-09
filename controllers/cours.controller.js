const coursShcema = require("../models/model_cours")
 
// adding new cours
exports.addNewCours =async (req, res) => {
    const {title, date, description, image} = req.body;
    try {
    const find = await coursSchema.findOne({title:title});
    if (find){
    res.status(400).send({msg:"this course already exist"})
    }
    const cours = new coursSchema(req.body)
    await cours.save();
    res.status(200).send({msg: 'added successfully'})
    } catch (error) {
    }
    }

    exports.afficheCours =  async (req,res)=>{
        try {
           const Affichage =  await coursSchema.find();
            res.status(200).send({msg:"list",Affichage});
        } catch (error) {
            res.status(500).send({msg:"could not list"})
        }
    }

    exports.deleteCours =  async (req,res)=>{
        const {ID} = req.params
        try {
        const removedCours = await CoursSchema.findByIdAndDelete(ID)
        res.status(200).send({msg:'successfully removed courst', removedCours})
        } catch (error) {
        res.status(500).send({msg:'cannot be removed', error}) 
        }
        }