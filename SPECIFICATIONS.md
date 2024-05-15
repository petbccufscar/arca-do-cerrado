# Arca do Cerrado - Especificações
O Arca do Cerrado é um site que visa alcançar o maior número de pessoas interessadas na preservação e conhecimento da biodiversidade do Cerrado. Oferecemos um mapa interativo em escala que representa a localização de cada uma de nossas mudas. Para facilitar a navegação, apresentamos uma imagem ilustrativa do mapa local. Ao clicar, o mapa interativo é apresentado, possibilitando o usuário a navegar entre as especies. Ao clicar em um pin, é mostrado as informações indiviuais. Essas informações também estão disponíveis na seção “espécies” do blog.

## Equipe 
### Arca do Cerrado
- Mauricio
- Lara

### Desenvolvimento
- Caio Cadini
- Giullio Gerolamo
- João Otávio Langer
- Jorge Pires


## Recursos

### Mapa Interativo
Para implementação do mapa interativo personalizado foi utilizada a biblioteca [**react-leaflet**](https://react-leaflet.js.org/docs/start-introduction/) em combinação com a biblioteca axios para chamada da API do site com o objetivo de obter informações das plantas registradas no backend.

#### [React-Leaflet](https://react-leaflet.js.org/docs/start-introduction/)

 A biblioteca React-Leaflet foi utilizada para implementação do mapa interativo personalizado utilizando como base o desenho da Arca, nesse caso, foi realizada a definição do componente `<Mapa/>` em "components/map/index.tsx" com a utilização de:

 * `ImageOverlay`
    * Utilizado para conseguir setar o mapa sobre a imagem personalizada do mapa
 * `markerCluster`
    * Utilizado para aglomerar os pings do mapa de acordo com o zoom no mapa

 Para assim definir o mapa interativo com seus clusters de pings contendo a informação de cada planta no mapa

#### [Axios](https://axios-http.com/docs/intro)

A biblioteca Axios foi utilizada para requisitar as informações das espécies presentes no mapa diretamente da API da arca, obtendo por sua vez coordenadas, imagens e apelidos de cada planta para conseguir apresentar tais informações ao se clicar no ping de cada planta no mapa na forma de Cards, componente declarado em "components/map/MapCard.tsx"

#### Explicação geral
Deste modo, informações de todas as espécies no BD são requisitadas através da API da Arca em conjunto do Axios no `useEffect()` declarado dentro da página do mapa, realizando uma atualização das informações todas vez que o componente é montado ou algum id sofre atualização em suas informações.

As informações das espécies são passadas para o componente `<Mapa/>` onde cada uma de suas instâncias são mapeadas na forma de pings que são agrupados como clusters de pings de acordo com sua proximidade no zoom sobre o mapa.

Em `const popupContent = ReactDOMServer.renderToString(<MapCard specie={specie} />)`, presente na declaração da componente `<Mapa/>` em "components/map/index.jsx" as informações de cada espécie é estabelecida em seu card (aberto ao se clicar no ping referente à espécie).

##### Filtragem por ID da planta
Acessando a url `/mapa/[id da planta]`, realiza-se um processo de filtração no mapa interativo, visto em "components/map/index.tsx" no trecho de código `if(filter)`, mostrando assim no mapa, apenas os pings que representam a espécie definida por aquele ID. Tal função também pode ser acessada clicando no símbolo de ping presente no card da espécie na aba de espécies no site.


### Envio de Email
Para implementação do envio de email personalizado foi utilizada a biblioteca [**EmailJS**](https://www.emailjs.com/).

#### [EmailJS](https://www.emailjs.com/)

A biblioteca EmailJS foi utilizada para implementação do *Newsletter* da Arca do Cerrado, utilizando suas funções no arquivo EmailJS.jsx explicado abaixo
 * `emailjs.send`
    * Utilizado para enviar o *email* em questão

#### EmailJS.jsx

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
    
    
#### Os emails
Dentro do projeto está implementado 3 tipos de envio de *email*, cada um possui sua função específica e a pessoa a qual receberá o email.
1.  ***Email*  `avisoInscricao`**: Este *email* é enviado para o **Professor Maurício** no momento em que uma nova inscrição é feita por alguem, contendo o nome da nova pessoa inscrita.
2. ***Email* `avisoMensagem`**:  Este *email* é enviado também para o **Professor Maurício** no momento em que alguem envia uma nova mensagem pelo site, contendo o email da pessoa que enviou e a mensagem propriamente escrita.
3. ***Email* `confirmaInscricao`**: Este *email* é enviado para a pessoa que se inscreveu no *Newsletter* do site, ele apenas informa da confirmação da inscrição no sistema de envio de *ema


## Implementação
Este projeto foi desenvolvido utilizando **ReactJS** para a construção da interface de usuário e [**Tailwind CSS**](https://tailwindcss.com) para a estilização. Para o banco
de dados foi utilizado o [**Django**](https://www.djangoproject.com) em *Python*.

### Dependências

- [**axios**](https://axios-http.com/ptbr/docs/intro): ^1.6.2
  - Utilizado para realizar requisições ao banco de dados.

- [**emailjs-com**](https://www.emailjs.com): 3.2.0
  - Utilizado para o envio de emails.

- [**leaflet**](https://leafletjs.com): ^1.9.4
- **leaflet.markercluster**: ^1.5.3
  - Utilizados para a criação do mapa interativo.

- **react**: ^18.2.0
- **react-dom**: ^18.2.0
  - Principais bibliotecas do React.

- **react-router-dom**: ^6.21.0
  - Utilizado para a navegação e gerenciamento de rotas no site.

- **react-icons**: ^4.12.0
  - Utilizado para adicionar ícones.

- [**swiper**](https://swiperjs.com): ^11.0.5
  - Utilizado para criar carrosséis.
  
### Estrutura do Projeto
#### Backend
##### Endpoints da API

A seguir estão os principais endpoints da API disponíveis para interação:

- api/Planta/

    - Descrição: Gerencia informações sobre plantas.

- api/ImagemPlanta/

    - Descrição: Gerencia imagens associadas a plantas.

- api/CoordenadaPlanta/

    - Descrição: Gerencia coordenadas de plantas.

- api/Mensagem/

    - Descrição: Gerencia mensagens enviadas através do sistema.

- api/Postagem/

    - Descrição: Gerencia postagens no blog do sistema.

- api/Atividade/

    - Descrição: Gerencia atividades no sistema.

- api/Equipe/

    - Descrição: Gerencia equipes no sistema.

- api/Configuracao/

    - Descrição: Gerencia configurações globais do sistema.

- api/Inscrito/

    - Descrição: Gerencia inscrições de usuários no blog.

Todos os endpointos possuem os métodos HTTP GET, POST, PUT e DELETE.

- Códigos de resposta:
  - 200 OK: Solicitação bem-sucedida
  - 201 Created: Planta criada com sucesso
  - 404 Not Found: Planta não encontrada
  - 400 Bad Request: Solicitação inválida


##### Modelos de Dados

Aqui estão os modelos de dados utilizados em nossa aplicação:

###### Planta
- **Descrição**: Representa uma planta no sistema.

- **Campos**:
  
  - **apelido**: CharField - O apelido da planta.
  - **nome_cientifico**: CharField - O nome científico da planta.
  - **resumo**: TextField - Um resumo da planta.
  - **texto**: TextField - Texto detalhado sobre a planta.

###### CoordenadaPlanta

- **Descrição**: Representa as coordenadas de uma planta no mapa.

- **Campos**:
  - planta: ForeignKey para Planta - A planta relacionada às coordenadas.
  - posicao_x: FloatField - A posição X da planta.
  - posicao_y: FloatField - A posição Y da planta.


###### ImagemPlanta

Descrição: Representa uma imagem associada a uma planta.

- **Campos**:
  
  - planta: ForeignKey para Planta - A planta associada à imagem.
  - imagem: ImageField - A imagem da planta.
  - descricao: CharField - Uma descrição da imagem (opcional).
  - tags: CharField - Tags relacionadas à imagem (opcional), as tags são usadas para inserção de características da imagem que podem ser usadas para a busca. 

###### Mensagem

- **Descrição**: Este modelo representa uma mensagem enviada através do formulário da aba Faça Parte ou da Home.

- **Campos**:

  - **email**: EmailField - O endereço de e-mail do remetente da mensagem.
  - **assunto**: CharField - O assunto da mensagem.
  - **mensagem**: TextField - O corpo da mensagem.

###### Equipe

- **Descrição**: Este modelo representa uma equipe ou membro da equipe no sistema, fornecendo informações sobre os membros da equipe.

- **Campos**:

  - **nome**: CharField - O nome do membro da equipe.
  - **imagem**: ImageField - A imagem do membro da equipe.
  - **cargo**: CharField - O cargo ou função do membro da equipe.
  - **biografia**: RichTextUploadingField - Uma descrição detalhada ou biografia do membro da equipe.
  - **link**: URLField (opcional) - Um link relacionado ao membro da equipe, como um perfil de mídia social ou página pessoal.

###### Atividade
  
- **Descrição**: Este modelo representa uma atividade realizada pelos membros da Arca do Cerrado, que será adicionada a aba Agenda.

- **Campos**:

  - **titulo**: CharField - O título ou nome da atividade.
  - **imagem**: ImageField - A imagem associada à atividade.
  - **descricao**: RichTextUploadingField - Uma descrição detalhada da atividade, incluindo informações sobre o que é, quando aconteceu e outros detalhes relevantes.
  - **autores_equipe**: ManyToManyField para Equipe (opcional) - Uma relação muitos para muitos com o modelo Equipe, representando os membros da equipe responsáveis pela atividade.
  - **data**: DateField - A data em que a atividade ocorreu ou está programada para ocorrer.

###### Postagem

- **Descrição**: Este modelo representa uma postagem no blog do sistema, fornecendo informações sobre diferentes artigos, notícias ou conteúdos compartilhados.

- **Campos**:

  - **titulo**: CharField - O título da postagem.
  - **imagem**: ImageField - A imagem associada à postagem.
  - **conteudo**: RichTextUploadingField - O conteúdo completo da postagem, incluindo texto formatado, imagens, vídeos ou outros elementos multimídia.
  - **autor_equipe**: ForeignKey para Equipe (opcional) - Uma relação de chave estrangeira com o modelo Equipe, representando o autor ou a equipe responsável pela postagem.
  - **data**: DateField - A data de publicação da postagem.
  - **link**: URLField (opcional) - Um link externo relacionado à postagem, como uma fonte de referência ou uma página relacionada.

###### Configuração

- **Descrição**: Este modelo representa as configurações globais do sistema, permitindo controlar diferentes aspectos do comportamento do sistema. Neste caso a configuração está sendo usada apenas para habilitar ou não a aba Agenda.

- **Campos**:

  - **mostrar_agenda**: BooleanField - Indica se a agenda deve ser exibida ou não no sistema. O valor padrão é True, indicando que a agenda deve ser mostrada por padrão.
  
- **Funcionalidades**:

  - **Impedimento de exclusão**: Sobrescreve o método delete para impedir a exclusão de objetos de configuração. Ao tentar excluir um objeto de configuração, uma exceção ValueError é levantada, garantindo que os objetos de configuração não sejam removidos acidentalmente, visto que o código de verificação precisa que o objeto da configuração não é alterado.
  
- **Sinal**:

  - **Validação de apenas uma configuração**: Usa o sinal pre_save para validar se já existe uma instância de configuração no banco de dados antes de criar uma nova. Se uma instância de configuração já existir e uma nova tentativa de criação for feita, uma exceção ValueError é levantada, indicando que apenas uma configuração é permitida no sistema.

###### Inscritos

- **Descrição**: Esta funcionalidade permite adicionar uma nova postagem ao blog do sistema e enviar um e-mail para todos os inscritos notificando sobre a nova postagem.

- **Métodos e Funções**:

  - **adicionar_postagem(request, postagem)**: Esta função é responsável por adicionar uma nova postagem ao blog e enviar e-mails para todos os inscritos notificando sobre a nova postagem. 
  Os passos incluem:
    1. Recuperar todos os inscritos no blog.  
    2. Obter a imagem associada à postagem.  
    3. Gerar o caminho da imagem e nome da imagem.  
    4. Gerar um CID (Content-ID) para a imagem e a logo.  
    5. Renderizar o conteúdo HTML do e-mail com o contexto atualizado, incluindo um resumo da postagem.  
    6. Enviar um e-mail para cada inscrito, anexando a imagem e a logo ao e-mail, além de alternar entre conteúdo HTML e texto simples.  
    7. Retornar uma resposta JSON indicando o status da operação.  

  - **enviar_email_nova_postagem(sender, instance, created, kwargs)**: Este receptor de sinal é acionado após a criação de uma nova postagem. Se a postagem for recém-criada (ou seja, created é True), a função adicionar_postagem é chamada para enviar e-mails de notificação para os inscritos sobre a nova postagem.

##### Configurações do backend

###### [Settings.py](/Backend/Arca/Arca/settings.py)

Este arquivo contém as configurações do Django para o projeto Arca. Aqui você pode definir variáveis de ambiente, ajustar as configurações do banco de dados, configurar a autenticação por e-mail, entre outras configurações importantes para o funcionamento do projeto.

###### Variáveis de Ambiente  
As variáveis de ambiente são usadas para manter informações sensíveis fora do código-fonte. Isso inclui chaves secretas, configurações de e-mail, entre outros. No arquivo settings.py, algumas dessas variáveis são definidas diretamente.

###### DEBUG
O modo DEBUG controla se o Django está em modo de depuração ou não. Em ambientes de produção, este valor deve ser definido como False para garantir a segurança do sistema.

###### ALLOWED_HOSTS
A lista de hosts permitidos que podem se comunicar com o servidor Django. Isso é importante para prevenir ataques de host spoofing.

###### CORS_ALLOWED_ORIGINS
Lista de origens permitidas para comunicação de recursos de origens cruzadas (CORS). Isso é útil para permitir que clientes web acessem recursos da API a partir de diferentes domínios.

###### MEDIA_URL e MEDIA_ROOT
As configurações MEDIA_URL e MEDIA_ROOT controlam o armazenamento e o acesso a arquivos de mídia, como imagens e vídeos enviados pelos usuários.

###### EMAIL_BACKEND e configurações de e-mail
Estas configurações controlam o backend de e-mail usado pelo Django para enviar e-mails, juntamente com as configurações específicas do servidor de e-mail, como host, porta e credenciais.

###### CKEditor e CKEditor Uploader
Configurações relacionadas ao CKEditor, um editor de texto enriquecido usado para entrada de conteúdo. As configurações incluem a versão do CKEditor, o caminho de upload de arquivos e outras opções de configuração.

###### INSTALLED_APPS
Lista de aplicativos instalados no projeto Django. Isso inclui os aplicativos padrão do Django, bem como aplicativos de terceiros adicionais.

###### MIDDLEWARE
Lista de middlewares usados para processar solicitações HTTP e respostas antes e depois que elas atingem as views. Isso inclui middlewares de segurança, middleware CORS e outros.

###### DATABASES
Configurações do banco de dados usado pelo Django. Neste caso, está configurado para usar SQLite3 como o banco de dados padrão.

###### STATICFILES_DIRS e STATIC_URL
Configurações relacionadas aos arquivos estáticos, como CSS, JavaScript e imagens. STATICFILES_DIRS define os diretórios onde os arquivos estáticos são armazenados, enquanto STATIC_URL define o URL base para acessar esses arquivos.

###### LOGGING
Configurações de logging para o projeto Django. Isso inclui o nível de log, o formato do log e o destino do log.

###### JAZZMIN_SETTINGS
Configurações personalizadas para o painel de administração do Django. Essas configurações controlam a aparência e o comportamento do painel de administração.

##### Admin
O backend pode ser acessado pelo /admin, através do qual os administradores do site podem fazer login e fazer alterações no banco de dados. 

##### Requisitos 

Os requisitos do backend estão listados no arquivo [requirements.txt](/Backend/Arca/Arca/requirements.txt).

Para atualizar este arquivo, pode ser usado o comando `pip freeze > requirements.txt` usando o pip.

E para instalar todas as dependências listadas no arquivo pode ser usado `pip install -r requirements.txt`


#### Frontend
##### /assets
Contém todas as imagens utilizadas no projeto, incluindo aquelas exibidas nas páginas "Sobre", "Home", "Contribua", além das imagens do mapa e as logos.

##### /components
Contém os componentes gerais do projeto. Está dividido em subpastas:

- **paginas**: Componentes específicos de cada página.
- **layout**: Componentes gerais como `Footer`, `Form`, `Loading` e `Navbar`.

##### /pages
Contém as páginas do projeto.

##### /routes
Define as rotas do projeto.

##### /styles
Define os estilos globais do projeto.

##### /utils
Contém funções reutilizáveis no projeto.