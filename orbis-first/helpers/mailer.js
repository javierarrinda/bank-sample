// let nodemailer = require('nodemailer')
// let hbs = require('hbs')
// let fs = require('fs')

// let transport = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "santilauria95@gmail.com",
//     pass: "SANTIlauria95!"
//   }
// })

// const accountCreated = hbs.compile(fs.readFileSync((__dirname, './views/mail/accountCreated.hbs'), 'utf8'));

// exports.sendWelcomeMail = function(name, email){
//   transport.sendMail({
//     from: "🤨",
//     bcc: email,
//     subject: "Bienvenido " + name,
//     html: 
//     `
//     <p>http://localhost:3000/auth/confirm/THE-CONFIRMATION-CODE-OF-THE-USER</p>
    
//     `
//     // html: `
//     //   <h2>Hola ${name}</h2>
//     //   <p>Como andas, mijo?, bienvenido al tu spam favorito</p>
//     //   <a href="www.fixter.camp" >Dejar de recibir estos correos</a>
//     // `
//   })
//   .then(r=>console.log(r))
//   .catch(e=>console.log(e))

// }