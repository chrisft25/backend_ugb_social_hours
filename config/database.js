const mongoose = require('mongoose');

module.exports = {
    connect: ()=>{
        try{
            mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true,useUnifiedTopology: true})
            const db = mongoose.connection
            db.once('open', ()=>console.log("Connected succesfully"))
        }catch(error){
            console.log(error)
        }
    },
}