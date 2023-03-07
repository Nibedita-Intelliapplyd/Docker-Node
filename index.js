const express = require('express');
const app = express();
const port = 3600;

app.get("/", (req, res)=>{
    console.log("Req hits")
    res.send("Hello DOCKER COMPOSE prod");
})

app.listen(port, ()=>{
    console.log(`Docker Node app on listening on port ${port}`)
    console.log("Let's get started!!!")
})
