import sendEmail from '../components/subscribe/email/EmailJS.jsx';
import AvisoInscricao from '../components/subscribe/email/folder/avisoInscricao.jsx';
import ConfirmaInscricao from '../components/subscribe/email/folder/confirmaInscricao.jsx';

const useEmail = () => {
    const sendInscricaoEmail = ({ toEmail, subject, message }) => {
        sendEmail({
            to_email: toEmail,
            subject: subject,
            message: message,
        });
    };

    const sendAvisoInscricao = (nome) => {
        sendInscricaoEmail({
            toEmail: import.meta.env.VITE_EMAIL_ARCA,
            subject: 'Novo inscrito no blog!',
            message: AvisoInscricao({ name: nome }),
        });
    };

    const sendConfirmaInscricao = (email, nome) => {
        sendInscricaoEmail({
            toEmail: email,
            subject: 'Obrigado por se inscrever',
            message: ConfirmaInscricao({ name: nome }),
        });
    };

    return { sendAvisoInscricao, sendConfirmaInscricao };
};

export default useEmail;
