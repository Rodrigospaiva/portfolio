const nodemailer = require('nodemailer');

const smtp_config = require('./smtp')

const transporter = nodemailer.createTransport({
    host: smtp_config.host,
    port: smtp_config.port,
    secure: false,
    auth: {
        user: smtp_config.user,
        pass: smtp_config.pass
    }
})

async function run() {

    const mailSend = await transporter.sendMail({
        text: 'Texto do e-mail teste',
        subject: 'Assunto do email teste',
        from: 'Rodrigo <engenharia.rsp@gmail.com>',
        to: ['desenvolvimento.rsp@gmail.com', 'engenharia.rsp@gmail.com']
    });

    console.log(mailer)

}

run()