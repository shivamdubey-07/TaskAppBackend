const express=require("express")
const cors=require("cors")

const app=express()
const bodyParser=require("body-parser")
const PORT=process.env.PORT || 8080;

app.use(bodyParser.json()); 
app.use(cors())



require("./DB/db")

const router = require('./routes/routes')
app.use('/task', router)


app.listen(PORT,()=>{
    console.log(`server ruuning at ${PORT}`);
})