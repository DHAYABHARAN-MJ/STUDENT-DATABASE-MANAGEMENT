const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=express()
app.use(cors())
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'2624',
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
app.post('/addStudent',(req,res)=>{
    const{rollno, name, bmail, pslevel,year,cgpa,lab,pr,fr}=req.body;
    const Query = "INSERT INTO sbdtable (rollno, name, bmail, pslevel, year, cgpa, lab, pr, fr) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values=[rollno, name, bmail, pslevel,year,cgpa,lab,pr,fr];
    db.query(Query,values,(err,result)=>{
        if(err)
            res.json({error:"DB error"});
        else
        res.json({message:"Sucessfully Added",data:result});
    })
})
app.listen(8081,()=>{
    console.log("ABD");
});