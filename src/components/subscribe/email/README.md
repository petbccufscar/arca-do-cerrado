# O envio de Emails da Arca do Cerrado

Neste arquivo ReadMe estaremos explicando como funciona o envio de *emails* dentro do nosso projeto, bem como os codigos utilizados por nós para tal.


## EmailJS.jsx

A função `sendEmail` é responsável por enviar *emails* utilizando o serviço EmailJS. Ela recebe como parâmetros a identificação do template de *email* a ser utilizado e os dados que serão preenchidos nesse template. A função então utiliza a biblioteca `emailjs` para enviar o *email*, tratando tanto de cenários de sucesso quanto de falha.

Em resumo, a função `sendEmail` realiza as seguintes etapas:
    
1.  **Função `sendEmail`**: A função recebe dois parâmetros:
    
    -   **`templateId`**: A identificação do template de email a ser utilizado. Esse template deve ter sido previamente criado no EmailJS.
    -   **`templateParams`**: Um objeto contendo os dados que serão preenchidos no template de *email*. Esses dados podem incluir informações como nome, *email*, mensagem, etc.
2.  **Envia o email**: Essa etapa utiliza a função `emailjs.send` para enviar o *email*. A função recebe os seguintes argumentos:
    
    -   **`serviceId`**: A identificação do seu serviço EmailJS.
    -   **`templateId`**: A identificação do template de *email* a ser utilizado.
    -   **`templateParams`**: O objeto contendo os dados que serão preenchidos no template de *email*.
    -   **`userId`**: A identificação do seu usuário no EmailJS.
3.  **Trata o resultado do envio**: Essa etapa verifica se o *email* foi enviado com sucesso ou se ocorreu algum erro.
    
    -   **Sucesso**: Se o *email* for enviado com sucesso, a função exibe uma mensagem na console informando o sucesso do envio e os detalhes da resposta.
    -   **Erro**: Se ocorrer algum erro durante o envio do *email*, a função exibe uma mensagem na console informando o erro e os detalhes do erro.
4.  **Exporta a função**: Essa etapa torna a função `sendEmail` disponível para ser utilizada em outras partes do seu código.
    
    
## Os emails
Dentro do projeto está implementado 3 tipos de envio de *email*, cada um possui sua função específica e a pessoa a qual receberá o email.
1.  ***Email*  `avisoInscricao`**: Este *email* é enviado para o **Professor Maurício** no momento em que uma nova inscrição é feita por alguem, contendo o nome da nova pessoa inscrita.
2. ***Email* `avisoMensagem`**:  Este *email* é enviado também para o **Professor Maurício** no momento em que alguem envia uma nova mensagem pelo site, contendo o email da pessoa que enviou e a mensagem propriamente escrita.
3. ***Email* `confirmaInscricao`**: Este *email* é enviado para a pessoa que se inscreveu no *Newsletter* do site, ele apenas informa da confirmação da inscrição no sistema de envio de *emails*.
