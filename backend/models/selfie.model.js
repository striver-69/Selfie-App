const mongoose=require('mongoose')

const Schema=mongoose.Schema

const selfieSchema=new Schema({
    description:{type:String,required:true}
},{
    timestamps:true,
})

const Selfie=mongoose.model('Selfie',selfieSchema)

module.exports=Selfie