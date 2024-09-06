const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=express()
app.use(cors())
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    passwoed:'2624',
    database:'sdb'
});
// db.connect((err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfullly connected");
//     }
// });
app.get('/',(req,res)=>{
    return res.json("ABD STARTED TO CONQUEOR THE WORLD");
})
app.get('/sbdtable',(req,res)=>{
    const sql="SELECT * FROM sbdtable";
    db.query(sql,(err,data)=>{
        if(err)return res.json(err);
        else
        {
            return res.json(data);
        }
        
    });
});
app.listen(8081,()=>{
    console.log("ABD");
});