const db= require("../models/address")

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
            const {address,secondLine} = req.body
            await db.updateOne({address,secondLine})
            res.json({status:"ok",message:"Actualizado correctamente"})
            
        }catch(error){
            console.log(error)
            res.json({status:"error",message:"Ha ocurrido un error en la BD"})
        }
    }
    
}