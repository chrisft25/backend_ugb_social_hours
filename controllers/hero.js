const db= require("../models/hero")

module.exports= {
    
    getAll: async(req,res)=>{
        try{
            res.json({status:"ok",data: await db.find({})})
        }catch(error){
            console.log(error)
            res.json({status:"error",message:"Ha ocurrido un error en la BD"})
        }
    },

    update: async(req,res)=>{
        try{
            await db.updateOne(req.body)
            res.json({status:"ok",message:"Actualizado correctamente"})
            
        }catch(error){
            console.log(error)
            res.json({status:"error",message:"Ha ocurrido un error en la BD"})
        }
    }
    
}