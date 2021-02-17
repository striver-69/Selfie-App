const router=require('express').Router()
let Selfie=require('../models/selfie.model')

router.route('/').get((req,res)=>{
    Selfie.find()
    .then(photos => res.json(photos))
    .catch((err)=> res.status(400).json('Error: '+err))
})

router.route('/add').post((req,res)=>{
    const description=req.body.description
    const date=Date.parse(req.body.date)
    
    const newPhoto=new Selfie({
        description,
        date,
    })
    
    newPhoto.save()
    .then(()=> res.json('Photo Added'))
    .catch((err)=> res.status(400).json('Error: '+ err))
})



router.route('/:id').delete((req,res)=>{
    Selfie.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Photo deleted'))
    .catch((err)=> res.status(400).json('Error: '+err))
})


module.exports=router
