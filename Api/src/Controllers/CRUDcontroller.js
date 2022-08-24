const {User, Income, Expenses}= require('../db');
const {Op}= require('sequelize');

const createUser= async (req,res,next)=>{
    
    const {name, surname, mail, password} = req.body;
    
    try{
    const newUser= {name, surname, mail, password}
    const createdUser = await User.create(newUser)

    res.status(200).send(createdUser)

}catch(error){
    next(error)
}
}


const getDbInfo = async ()=>{
    try{
        let getInfo= await User.findAll({
            include:[{
                model: Income,
                attributes:["Concept","amount","date","type","category","id"],
                through:{attributes: []},
            },
            {
                model: Expenses,
                attributes:["Concept","amount","date","type","category","id"],
                through:{attributes: []},
            },
        ],
          
           
            attributes:["name","surname","id","mail","password"]
        })
        return getInfo;
    }catch(error){
        console.log(error)
    }
}

const userAuthentication= async (mail, password)=>{
    

    try{
        const dbUser= await User.findOne({
            include: [Expenses, Income],
            where:{
                mail:{
                    [Op.iLike]: `${mail}`
                },
                password:{
                    [Op.iLike]: `${password}`
                }
            }
        })
        
        
        return dbUser;

    }catch(error){
        next(error)
    }
}


module.exports= {
    createUser,
    getDbInfo,
    userAuthentication
}