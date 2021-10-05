const express = require("express");
const app =express();
const cors = require("cors");
const mysql = require("mysql");
app.use(cors());
app.use(express.json());

//create connection to the database
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "fullstack"
})

//insert the data received into the user table
app.post('/submit',(req, res)=>{
    const name= req.body.name
    const password= req.body.password

    db.query('INSERT INTO users(name, password) VALUES (?,?)'[name, password],
    (err, result)=>{
        if (err) {
            console.log(err)
        } else {
            res.send("You registered successfully")
        }
    })
});
