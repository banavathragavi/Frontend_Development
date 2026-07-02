const express=require('express');
const jwt=require('jsonwebtoken');
const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";
app.post('/login',(req,res)=>{
    const {username,password}=req.body;

     if (username === "admin" && password === "1234") {
            const token = jwt.sign(
                { username: username },
                SECRET_KEY,
                { expiresIn: "1h" }
     );
     res.json({token});
    }else{
        res.json(404).json({message:"Invalid credentials"});
     }
});

app.get('/profile',(req,res)=>{
    const token=req.header("Authorization");
    if(!token){
        return res.status(401).json({message:"Token missing"});
    }
    try{
        const decode=jwt.verify(token,SECRET_KEY);
        res.json({
            message:"Acess granted",
            user:decode
        });
    }catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
});

app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");
});