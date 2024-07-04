import emailjs from 'emailjs-com';

import AvisoInscricao from '../components/subscribe/email/folder/avisoInscricao.jsx';
import ConfirmaInscricao from '../components/subscribe/email/folder/confirmaInscricao.jsx';
import AvisoMensagem from '../components/subscribe/email/folder/avisoMensagem.jsx';

// Função assíncrona para envio de emails com EmailJS
const sendEmail = async (templateParams) => {
    try {
        console.log(templateParams);
        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            templateParams,
            import.meta.env.VITE_EMAILJS_USER_ID
        );

        console.log('E-mail enviado com sucesso!', response.status, response.text);
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
    }
};

const useEmail = () => {

    const sendAvisoInscricao = async (nome) => {
        await sendEmail({
            to_email: import.meta.env.VITE_EMAIL_ARCA, 
            subject: 'Novo inscrito no blog!',
            message: AvisoInscricao({ name: nome }),
        });
    };

    const sendConfirmaInscricao = async (email, nome) => {
        await sendEmail({
            to_email: email, 
            subject: 'Obrigado por se inscrever',
            message: ConfirmaInscricao({ name: nome }),
        });
    };

    const sendMensagem = async (email, subject, mensagem) => {
        await sendEmail({
            to_email: import.meta.env.VITE_EMAIL_ARCA, 
            subject: subject,
            message: AvisoMensagem({email, mensagem}),
        });
        console.log(email);
        console.log(subject);
        console.log(mensagem);
    };

    return { sendMensagem, sendAvisoInscricao, sendConfirmaInscricao };
};

export default useEmail;
