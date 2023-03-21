const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require("nodemailer");

const msg = {
    from: process.env.EMAIL_ADDRESS,
    to: 'manjutest404@gmail.com',
    subject: 'Checking Nodemailer',
    text: 'Nodemailer worked successfully!'

};

nodemailer.createTransport({
  
    service:'gmail',
    secure: true,
    auth:{
        user:process.env.EMAIL_ADDRESS,
        pass:process.env.PASSWORD
    },
    port:465,
    host:'smtp.gmail.com'
})
.sendMail(msg,(err)=>{
    if(err){
        return console.log('Error occurs',err)
    }else {
        return console.log('Email Sent')
    }
})




