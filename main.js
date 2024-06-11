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

// CRUD functionality of movies

// R - For Reading movies
app.get('/movies',(req,res) => {

})

// C - For Creating movies
app.post('/movies',(req,res) => {

})

// U - For Updating movie
app.get('/movies/:id',(req,res) => {

})

// D - For Deleting movie
app.get('/movies/:id',(req,res) => {

})