import express from "express";
const app = express()
const PORT = 6969;
app.get('/',(req,res)=>{
    res.json({msg: "Hello students!"});
});

app.listen(PORT, ()=>{
    console.log(`The server is running at http://localhost:${PORT}`)
})

//To kill the port which is already in use -> npx kill-port 6969 //