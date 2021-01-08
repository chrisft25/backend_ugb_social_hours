const db= require("../models/cards")

module.exports= {
    
    getAll: async(req,res)=>{
        try{
            res.json({status:"ok",data: await db.find({})})
        }catch(error){
            console.log(error)
            res.json({status:"error",message:"Ha ocurrido un error en la BD"})
        }
    },

    create: async(req,res)=>{
        try{
            await db.create(req.body)
            res.json({status:"ok",message:"Creado correctamente"})
            
        }catch(error){
            console.log(error)
            res.json({status:"error",message:"Ha ocurrido un error en la BD"})
        }
    },

    update: async(req,res)=>{
        try{
            await db.updateOne({_id:req.body._id},req.body)
            res.json({status:"ok",message:"Actualizado correctamente"})
            
        }catch(error){
            console.log(error)
            res.json({status:"error",message:"Ha ocurrido un error en la BD"})
        }
    },

    delete: async(req,res)=>{
        try{
            await db.deleteOne({_id:req.body._id},req.body)
            res.json({status:"ok",message:"Eliminado correctamente"})
            
        }catch(error){
            console.log(error)
            res.json({status:"error",message:"Ha ocurrido un error en la BD"})
        }
    }
    
}