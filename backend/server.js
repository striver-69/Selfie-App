const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')


require('dotenv').config()

const app=express()
const port=process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/selfie',{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true})
const connection=mongoose.connection
connection.once('open',()=>{
    console.log('MongoDB database connection established successfully')
})

const SelfieRouter=require('./routes/selfie')


app.use('/selfie',SelfieRouter)


app.listen(port,()=>{
    console.log(`Server is up in running : ${port}`)
})
