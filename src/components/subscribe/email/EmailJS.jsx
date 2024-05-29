import emailjs from 'emailjs-com';

{/*Função para envio de emails com EmailJS*/}
const sendEmail = (templateParams) => {
    emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE, templateParams, import.meta.env.VITE_EMAILJS_USER_ID)
        .then((response) => {
            console.log('E-mail enviado com sucesso!', response.status, response.text);
        })
        .catch((error) => {
            console.error('Erro ao enviar e-mail:', error);
        });
};

export default sendEmail;