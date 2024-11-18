const mongoose = require('mongoose')
const config = require('config')
const db =  process.env.mongoUri
mongoose.connect(db)

const connectDb = async ()=>{
    try{
            await mongoose.connect(db);

            
    }catch(e){
            
            process.exit(1)
    }
}

module.exports = connectDb;