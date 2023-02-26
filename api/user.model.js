const{v1:uuidv1 , v4 :uuidv4}=require("uuid");

function createId(){
    return uuidv1();
}

const initialUsers = ()=>{
   let initialUsersList = [
        {id:createId(),kullaniciadi:"haskek",sifre:"hasancık"},
        {id:createId(),kullaniciadi:"haskek1",sifre:"hasancık"},
        {id:createId(),kullaniciadi:"haskek2",sifre:"hasancık"},
        {id:createId(),kullaniciadi:"haskek3",sifre:"hasancık"},
    ]; 
    return initialUsersList;

};

let users= initialUsers();

const getallusers =()=>{
    return users;
}

const createuser=(user)=>{
    user.id=createId();
    users.push(user);
    return user;
}


const finduser=(user)=>{
    let isExistUser= false;
    users.forEach(userItem => {
        if(userItem.kullaniciadi== user.kullaniciadi && userItem.sifre==user.sifre){
            isExistUser = true;
            return isExistUser;
        }
        
    });

}

const checkusername=(kullaniciadi)=>{
    let isExistUserName=false;
    for(let i=0; i < users.length; i++){
        const userItem = users[i];
        if(userItem.kullaniciadi==kullaniciadi){
            isExistUserName=true;
            break;
        }
    }
    return isExistUserName;
}

module.exports={
    getallusers,
    createuser,
    finduser,
    checkusername
}