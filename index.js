const server = require("./api/server");
require("dotenv").config();

const port = process.env.PORT || 9001;

server.listen(port,()=>{
    console.log("server listening on " )
})


console.log("node is working"); 