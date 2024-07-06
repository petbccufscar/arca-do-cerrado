const AvisoInscricao = ({ name }) => {
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
                        background-color: #00A496;
                        border-radius: 5px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333333;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>${name} acaba de se inscrever no Blog!</h1>
                    <p>Atenciosamente,<br/>Site Arca do Cerrado</p>
                </div>
            </body>
        </html>
    `;
};

export default AvisoInscricao;
