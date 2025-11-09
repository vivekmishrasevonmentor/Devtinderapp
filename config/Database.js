const mongoose=require("mongoose")
const url="mongodb://localhost:27017/Devtinder"

const connectDB=async ()=>{
    await mongoose.connect(url)
}

module.exports=connectDB
