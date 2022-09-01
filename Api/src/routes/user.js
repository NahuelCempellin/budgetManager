const {userID} = require('../Controllers/CRUDcontroller');
const express = require('express');
const router = express.Router();

router.get('/:id',async(req,res)=>{
    const{id}= req.params;
    console.log(id)

    try{
        const userId= await userID(id);
        
        res.status(200).json(userId);

    }catch(error){
        console.log(error);
    }
})



module.exports= router;