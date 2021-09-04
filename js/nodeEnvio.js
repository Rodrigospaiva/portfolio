const express = require('express');
const nodemailer = required('nodemailer');
const app = express();

const port = 3000

const user = 'engenharia.rsilva@gmail.com'
const pass = '44809090'

app.get('/', (req, res) => res.send('Hello World in Node.js!'));

app.get('/send', (req, res) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {user, pass}
            
    })

    transporter.sendMail({
        from: user,
        to: user,
        replyTo: 'desenvolvimento.rsp@gmail.com',
        subject: 'Seja bem vindo! Rodrigo rs',
        text: "Esse é um teste enviado do Back end do Node.js."
    }).then(info=>{
        res.send(info)
    }).catch(error=>{
        res.error(error)
    })

})


// const handlebars = require("express-handlebars");
// const bodyParser = require('bodyParser');

// // Template Engine 
// app.engine('handlebars', handlebars({defaultLayout: 'main'}))
// app.set('view engine', 'handlebars')

// // Rota
// app.post('/envio', function(req, res) {
//     res.send('Form recebido!!')
// })

// // bodyParser
// app.use(bodyParser.urlencoded({exteded: false}))
// app.use(bodyParser.json())