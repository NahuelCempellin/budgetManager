const {userAuthentication} = require('../Controllers/CRUDcontroller');
const express = require('express');
const router = express.Router();

router.post('/',async(req,res)=>{
    const{mail,password}= req.body;
    console.log(mail,password)

    try{
        const auth= await userAuthentication(mail,password);
        
        if(auth === null){
            res.status(404).send('Authentication Error')
        }
        res.status(200).json(auth);

    }catch(error){
        console.log(error);
    }
})



module.exports= router;