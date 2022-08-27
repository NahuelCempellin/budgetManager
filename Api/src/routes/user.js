const {userID} = require('../Controllers/CRUDcontroller');
const express = require('express');
const router = express.Router();

router.post('/',async(req,res)=>{
    const{name,surname}= req.body;
  

    try{
        const userId= await userID(name,surname);
        
        res.status(200).json(userId);

    }catch(error){
        console.log(error);
    }
})



module.exports= router;