import emailjs from 'emailjs-com';

import AvisoInscricao from '../components/subscribe/email/folder/avisoInscricao.jsx';
import ConfirmaInscricao from '../components/subscribe/email/folder/confirmaInscricao.jsx';
import AvisoMensagem from '../components/subscribe/email/folder/avisoMensagem.jsx';

// Função para envio de emails com EmailJS
const sendEmail = (templateParams) => {
    emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Corrigido de VITE_EMAILJS_TEMPLATE para VITE_EMAILJS_TEMPLATE_ID
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then((response) => {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
    })
    .catch((error) => {
        console.error('Erro ao enviar e-mail:', error);
    });
};

const useEmail = () => {

    const sendAvisoInscricao = (nome) => {
        sendEmail({
            to_email: import.meta.env.VITE_EMAIL_ARCA, 
            subject: 'Novo inscrito no blog!',
            message: AvisoInscricao({ name: nome }),
        });
    };

    const sendConfirmaInscricao = (email, nome) => {
        sendEmail({
            to_email: email, 
            subject: 'Obrigado por se inscrever',
            message: ConfirmaInscricao({ name: nome }),
        });
    };

    const sendMensagem = (email, subject, mensagem) => {
        sendEmail({
            to_email: import.meta.env.VITE_EMAIL_ARCA, 
            subject: subject,
            message: AvisoMensagem(email, mensagem),
        });
        console.log(email);
    };

    return { sendMensagem, sendAvisoInscricao, sendConfirmaInscricao };
};

export default useEmail;
