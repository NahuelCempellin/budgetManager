const {getDbInfo} = require('../Controllers/CRUDcontroller');
const express= require('express');
const router= express.Router();

router.get('/', async(req,res)=>{
    try{
        const getInfo= await getDbInfo();
        res.status(200).json(getInfo)
    }catch(error){
        console.log(error)
    }
})


module.exports = router;