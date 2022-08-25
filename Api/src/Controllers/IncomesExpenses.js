const {Income,Expenses,User}= require('../db');
const {Op}= require('sequelize');


const addIncome= async (req,res,next)=>{
    const{Concept,amount,date,type,category,id}= req.body;

try{
    const newIncome= {Concept,amount,date,type,category};
    const createIncome= await Income.create(newIncome)

    await createIncome.addUser(id)

    res.status(200).send(createIncome)


}catch(error){
    next(error)
}

}




const addExpenses= async (req,res,next)=>{
    const{Concept,amount,date,type,category,id}= req.body;

try{
    const newExpenses= {Concept,amount,date,type,category};
    const createExpenses= await Expenses.create(newExpenses)

    await createExpenses.addUser(id)

    res.status(200).send(createExpenses)


}catch(error){
    next(error)
}

}


const editIncome= async(req,res,next)=>{
    const{Concept,amount,date,type,category,id}= req.body;
    const incomeUpdate= await Income.findByPk(id);

    try{
        if(Concept){
            incomeUpdate.update({Concept: Concept})
            incomeUpdate.save();
        }if(amount){
            incomeUpdate.update({amount: amount})
            incomeUpdate.save();
        }if(date){
            incomeUpdate.update({date: date})
            incomeUpdate.save();
        }if(type){
            incomeUpdate.update({type: type})
            incomeUpdate.save();
            
        }if(category){
            incomeUpdate.update({category: category})
            incomeUpdate.save();
            
        }
        console.log(incomeUpdate)
        res.status(200).json(incomeUpdate);
    }catch(error){
        next(error)
    }

}

const editExpenses= async(req,res,next)=>{
    const{Concept,amount,date,type,category,id}= req.body;
    const expensesUpdate= await Expenses.findByPk(id);

    try{
        if(Concept){
            expensesUpdate.update({Concept: Concept})
            expensesUpdate.save();
        }if(amount){
            expensesUpdate.update({amount: amount})
            expensesUpdate.save();
        }if(date){
            expensesUpdate.update({date: date})
            expensesUpdate.save();
        }if(type){
            expensesUpdate.update({type: type})
            expensesUpdate.save();
            
        }if(category){
            expensesUpdate.update({category: category})
            expensesUpdate.save();
            
        }
        console.log(expensesUpdate)
        res.status(200).json(expensesUpdate);
    }catch(error){
        next(error)
    }

}


const deleteIncome= async(req,res,next)=>{
    const {id}= req.body;

    try{

        const del = await Income.destroy({
            where:{
                id: id
            }
        })
        console.log(del)
        res.status(200).json({msg: "Deleted"})

    }catch(error){
        next(error)
    }
}

const deleteExpenses= async(req,res,next)=>{
    const {id}= req.body;
    console.log(id)

    try{

        const del = await Expenses.destroy({
            where:{
                id: id
            }
        })
        console.log(del)
        res.status(200).json({msg: "Deleted"})

    }catch(error){
        next(error)
    }
}


module.exports= {
    deleteExpenses,
    deleteIncome,
    addIncome,
    addExpenses,
    editIncome,
    editExpenses
}