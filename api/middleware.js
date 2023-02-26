const { getallusers,createuser,finduser,checkusername} = require("./user.model");

function logger (req,res,next){
    const method=req.method;
    const url=req.originalUrl;
    const timestamp=new Date().toLocaleString();

    console.log(method+"--"+url+"--"+timestamp);
    next();
}

function validateInput(req,res,next){
    const {kullaniciadi,sifre}=req.body;
    if(kullaniciadi || !sifre){
        res.status(400).json({message:"Eksik alan var"});
    }else{
        next();
    }

}

function ValidateNewUser(req, res, next) {
    const { kullaniciadi, sifre } = req.body;
    let isExistUserName = checkusername(kullaniciadi);
    if (isExistUserName) {
        res.json(400).json({ message: kullaniciadi + "  " + "daha önce kullanılmıştır" })
    } else {
        next();
    }
}


function ValidateLoginUser(req, res, next) {
    const { kullaniciadi, sifre } = req.body;

    let isExistUser = finduser({ kullaniciadi: kullaniciadi, sifre: sifre });
    if (isExistUser) {
        res.status(404).json({ message: "Böyle bir kullanıcı yok" });
    } else {
        req.user={kullaniciadi:kullaniciadi,sifre:sifre};
        next();
    }

}




module.exports={ValidateLoginUser,ValidateNewUser,logger,validateInput}