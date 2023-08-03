const mongoose =require("mongoose");
require('dotenv').config()


main().catch(err => console.log(err));

async function main() {

  await mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  socketTimeoutMS: 30000,
});


  console.log("db connected")

}


