const express = require("express")
const mysql = require("mysql")
const bcrypt = require("bcrypt")
const session = require("express-session")
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();


const myConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "constructionsystem"
})


const app = express()

app.use(express.static('public'))

app.use(express.static('views'))

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/aboutus", (req,res)=>{
    res.render("aboutus.ejs")
})
app.get("/contact", (req,res)=>{
    res.render("contact.ejs")
})
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
  
    // Configure the email transport using the default SMTP transport and a Gmail account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    const mailOptions = {
      from: email,
      to: 'scottymutai@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending message.');
      } else {
        console.log('Message sent: %s', info.messageId);
        res.send('Message sent successfully!');
      }
    });
  });

app.get("/services", (req,res)=>{
    res.render("services.ejs")
})
app.get("/project-details", (req,res)=>{
    res.render("projectdetails.ejs")
})
app.get("/learnmore", (req,res)=>{
    res.render("learnmore.ejs")
})

app.get("/login",(req,res)=>{
    if(req.query.signupSuccess){
        res.render("signin.ejs", {message: "Signup successful!! You can now log in."})
    }else if(req.query.message){
        res.render("signin.ejs", {message: "Sign up Access the Website Features."})
    }else{
         res.render("signin.ejs")
    }

})
app.post("/login",(req,res)=>{
   
    
})
app.get("/signup",(req,res)=>{
    res.render("signup.ejs")
})
app.post("/signup",(req,res)=>{

})

app.listen(8000,()=>console.log("Server running on port 8000"))