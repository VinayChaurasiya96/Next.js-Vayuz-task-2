import mongoose from 'mongoose'

const connectMongo = async()=>{

 try{
  await mongoose.connect(process.env.MONGO_URL, (err, client) => {
    if (err) {
      console.log("err");
      console.log(err);
    } else {
      
      // console.log("Connection Established !!");
    }
  });
 }catch(err){
  console.log(err)
 }
}

export default connectMongo