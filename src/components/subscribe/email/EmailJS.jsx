import emailjs from 'emailjs-com';

{/*Função para envio de emails com EmailJS*/}
const sendEmail = (templateParams, template) => {
    emailjs.send('service_zi7ho1j', template, templateParams, 'qYGNfxFJFVVn9-6pi')
        .then((response) => {
            console.log('E-mail enviado com sucesso!', response.status, response.text);
        })
        .catch((error) => {
            console.error('Erro ao enviar e-mail:', error);
        });
};

export default sendEmail;