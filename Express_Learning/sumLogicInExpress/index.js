import express from 'express';

const calculateSum = (n)=>{
    let sum = 0 ;
    for (let i = 1; i <= n; i++){
        sum = sum + i;
    }
    return sum;
}

const app = express();

app.get('/' , (req , res)=>{
    try {
        const n = req.query.n;
        res.send(calculateSum(n).toLocaleString())
    } catch (error) {
        console.log("Your error is " , error);
        
    }
  
})


app.listen(3000,()=>{
    console.log("Your logic is working");
    
})


