const ConfirmaInscricao = ({ name }) => {
    // URL para a página de cancelamento de inscrição do seu site
    const unsubscribeUrl = 'https://seusite.com/cancelar-inscricao';

    return `
        <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f2f2f2;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #ffffff;
                        border-radius: 5px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333333;
                    }
                    .unsubscribe-link {
                        color: #007bff;
                        text-decoration: underline;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Olá ${name},</h1>
                    <p>Obrigado por se inscrever em nosso blog!</p>
                    <p>Se você deseja cancelar sua inscrição, clique <a href="${unsubscribeUrl}" class="unsubscribe-link">aqui</a>.</p>
                    <p>Atenciosamente,<br/>Site Arca do Cerrado</p>
                </div>
            </body>
        </html>
    `;
};

export default ConfirmaInscricao;
