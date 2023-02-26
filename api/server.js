const express = require("express");
const mw = require("./middleware");
const userModel = require("./user.model");


const server = express();
server.use(express.json());
server.use(mw.logger);


server.get("/api/kullanicilar",(res,req,next)=>{
    let allUsers = userModel.getallusers();
    res.json(allUsers);
});

server.post("/api/kayitol",mw.validateInput,mw.ValidateNewUser,(req,res,next)=>{
    try {
        let user = req.user;
    let createdUser = userModel.createuser(user);
    res.status(201).json(createdUser); 
    } catch (error) {
        next(error);
    }
    
});


server.post("/api/login",mw.validateInput,mw.ValidateLoginUser,(req,res,next)=>{
    try {
        res.json({message : "Hoşgeldin, giriş başarılı"});
    } catch (error) {
        next(error);
    }
});



server.use((err,res,req)=>{
    res.status(err.status || 500).json({
        customMessage : "Bir hata oluştu",
        message:err.message
    });
});

module.exports= server;