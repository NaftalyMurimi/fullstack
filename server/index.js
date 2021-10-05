//create  a simple express server
//import express library
const express = require("express");
//create an app
const app = express();
// import mysql 
const mysql = require("mysql");
//import and use cors
const cors = require("cors");
app.use(cors()); 
app.use(express.json())
//create connection to the database
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "fullstack"
})

//insert data to the database
app.post('/create', (req, res)=>{
    //get variables from the frontend to backend
    console.log(req.body);
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const wage = req.body.wage

    db.query('INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)', 
    [name, age, country, position, wage], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Details Submitted successfully");
        }
    })

});
// get data ffrom db

app.get('/employees',(req, res)=>{
    db.query('SELECT * FROM employees', (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })

})
//test if the app is running
app.listen(3001, ()=>{
    console.log("Hello the backend app is running on port 3001")
});