const express = require('express')
const nodemailer = require("nodemailer");
const app = express();


// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function  varify() {

    try {
        await transporter.verify();
        console.log("Server is ready to take our messages");
      } catch (err) {
        console.error("Verification failed:", err);
      }
}

async function  sendMail() {

    try {
        const info = await transporter.sendMail({
          from: '"Example Team" <gsdwiwedi@gmail.com>', // sender address
          to: "gshashwat111@gmail.com", // list of recipients
          subject: "Test Mail", // subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // HTML body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Preview URL is only available when using an Ethereal test account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      } catch (err) {
        console.error("Error while sending mail:", err);
      }
}

varify();
sendMail()

app.listen(3000, ()=>{
     console.log("App is Running")
})