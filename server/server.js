const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'sdb'
});

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
app.get('/ps',(req,res)=>{
    const Query="SELECT * FROM sbdtable ORDER BY pslevel DESC";
    db.query(Query,(err,data)=>{
        if(err)
            return res.json(err);
        else
        return res.json(data);
    })
})
app.get('/year',(req,res)=>{
    const Query="SELECT * FROM sbdtable ORDER BY year DESC";
    db.query(Query,(err,data)=>{
        if(err)
            return res.json(err);
        else
            return res.json(data);
    })
})
app.get('/name',(req,res)=>{
    const Query="SELECT * FROM sbdtable ORDER BY name"
    db.query(Query,(err,data)=>{
        if(err)
            return res.json(err);
        else
        return res.json(data);
    })
})
app.post('/addStudent',(req,res)=>{
    const{rollno, name, bmail, pslevel,year,cgpa,lab,pr,fr}=req.body;
    const Query = "INSERT INTO sbdtable (rollno, name, bmail, pslevel, year, cgpa, lab, pr, fr) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values=[rollno, name, bmail, pslevel,year,cgpa,lab,pr,fr];
    db.query(Query,values,(err,result)=>{
        if(err)
        {res.json({error:"DB error"});
    console.log(err);
}
        else
        res.json({message:"Sucessfully Added",data:result});
    })
})
app.listen(8081,()=>{
    console.log("ABD");
});