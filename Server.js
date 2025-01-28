const express=require('express');
const app=express();
const port=5000;

app.get('/ping',(req,res)=>{
    res.send('Pong');
});


app.listen(5000,()=>{
    console.log(`Server is running on port: ${port}`);
});