import mongoose from "mongoose"

const connectdB = async () => { await mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("db connected"))
.catch((error)=>console.log(error.message))
}

export default connectdB