const AvisoMensagem = ({ email, mensagem }) => {
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
            p {
              color: #555555;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Mensagem recebida!</h1>
            <p> 
              Email do remetente: ${email}
            </p>
            <p> 
              Mensagem:
            </p>
            <p> 
              ${mensagem}
            </p>
            <p>
              Atenciosamente,<br/>
              Site Arca do Cerrado!
            </p>
          </div>
        </body>
      </html>
    `;
};

export default AvisoMensagem;
