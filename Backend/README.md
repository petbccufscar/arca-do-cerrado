# Estrtutura do Projeto (Backend)

## Visão Geral

Esta documentação fornece informações detalhadas sobre a API do nosso backend, incluindo os endpoints disponíveis, os modelos de dados utilizados e as diferentes integrações utilizadas.

## Endpoints da API

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


## Modelos de Dados

Aqui estão os modelos de dados utilizados em nossa aplicação:

### Planta
- **Descrição**: Representa uma planta no sistema.

- **Campos**:
  
  - **apelido**: CharField - O apelido da planta.
  - **nome_cientifico**: CharField - O nome científico da planta.
  - **resumo**: TextField - Um resumo da planta.
  - **texto**: TextField - Texto detalhado sobre a planta.

### CoordenadaPlanta

- **Descrição**: Representa as coordenadas de uma planta no mapa.

- **Campos**:
  - planta: ForeignKey para Planta - A planta relacionada às coordenadas.
  - posicao_x: FloatField - A posição X da planta.
  - posicao_y: FloatField - A posição Y da planta.


### ImagemPlanta

Descrição: Representa uma imagem associada a uma planta.

- **Campos**:
  
  - planta: ForeignKey para Planta - A planta associada à imagem.
  - imagem: ImageField - A imagem da planta.
  - descricao: CharField - Uma descrição da imagem (opcional).
  - tags: CharField - Tags relacionadas à imagem (opcional), as tags são usadas para inserção de características da imagem que podem ser usadas para a busca. 

### Mensagem

- **Descrição**: Este modelo representa uma mensagem enviada através do formulário da aba Faça Parte ou da Home.

- **Campos**:

  - **email**: EmailField - O endereço de e-mail do remetente da mensagem.
  - **assunto**: CharField - O assunto da mensagem.
  - **mensagem**: TextField - O corpo da mensagem.

### Equipe

- **Descrição**: Este modelo representa uma equipe ou membro da equipe no sistema, fornecendo informações sobre os membros da equipe.

- **Campos**:

  - **nome**: CharField - O nome do membro da equipe.
  - **imagem**: ImageField - A imagem do membro da equipe.
  - **cargo**: CharField - O cargo ou função do membro da equipe.
  - **biografia**: RichTextUploadingField - Uma descrição detalhada ou biografia do membro da equipe.
  - **link**: URLField (opcional) - Um link relacionado ao membro da equipe, como um perfil de mídia social ou página pessoal.

### Atividade
  
- **Descrição**: Este modelo representa uma atividade realizada pelos membros da Arca do Cerrado, que será adicionada a aba Agenda.

- **Campos**:

  - **titulo**: CharField - O título ou nome da atividade.
  - **imagem**: ImageField - A imagem associada à atividade.
  - **descricao**: RichTextUploadingField - Uma descrição detalhada da atividade, incluindo informações sobre o que é, quando aconteceu e outros detalhes relevantes.
  - **autores_equipe**: ManyToManyField para Equipe (opcional) - Uma relação muitos para muitos com o modelo Equipe, representando os membros da equipe responsáveis pela atividade.
  - **data**: DateField - A data em que a atividade ocorreu ou está programada para ocorrer.

### Postagem

- **Descrição**: Este modelo representa uma postagem no blog do sistema, fornecendo informações sobre diferentes artigos, notícias ou conteúdos compartilhados.

- **Campos**:

  - **titulo**: CharField - O título da postagem.
  - **imagem**: ImageField - A imagem associada à postagem.
  - **conteudo**: RichTextUploadingField - O conteúdo completo da postagem, incluindo texto formatado, imagens, vídeos ou outros elementos multimídia.
  - **autor_equipe**: ForeignKey para Equipe (opcional) - Uma relação de chave estrangeira com o modelo Equipe, representando o autor ou a equipe responsável pela postagem.
  - **data**: DateField - A data de publicação da postagem.
  - **link**: URLField (opcional) - Um link externo relacionado à postagem, como uma fonte de referência ou uma página relacionada.

### Configuração

- **Descrição**: Este modelo representa as configurações globais do sistema, permitindo controlar diferentes aspectos do comportamento do sistema. Neste caso a configuração está sendo usada apenas para habilitar ou não a aba Agenda.

- **Campos**:

  - **mostrar_agenda**: BooleanField - Indica se a agenda deve ser exibida ou não no sistema. O valor padrão é True, indicando que a agenda deve ser mostrada por padrão.
  
- **Funcionalidades**:

  - **Impedimento de exclusão**: Sobrescreve o método delete para impedir a exclusão de objetos de configuração. Ao tentar excluir um objeto de configuração, uma exceção ValueError é levantada, garantindo que os objetos de configuração não sejam removidos acidentalmente, visto que o código de verificação precisa que o objeto da configuração não é alterado.
  
- **Sinal**:

  - **Validação de apenas uma configuração**: Usa o sinal pre_save para validar se já existe uma instância de configuração no banco de dados antes de criar uma nova. Se uma instância de configuração já existir e uma nova tentativa de criação for feita, uma exceção ValueError é levantada, indicando que apenas uma configuração é permitida no sistema.

### Inscritos

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

## Configurações do backend

### [Settings.py](/Backend/Arca/Arca/settings.py)

Este arquivo contém as configurações do Django para o projeto Arca. Aqui você pode definir variáveis de ambiente, ajustar as configurações do banco de dados, configurar a autenticação por e-mail, entre outras configurações importantes para o funcionamento do projeto.

### Variáveis de Ambiente  
As variáveis de ambiente são usadas para manter informações sensíveis fora do código-fonte. Isso inclui chaves secretas, configurações de e-mail, entre outros. No arquivo settings.py, algumas dessas variáveis são definidas diretamente.

### DEBUG
O modo DEBUG controla se o Django está em modo de depuração ou não. Em ambientes de produção, este valor deve ser definido como False para garantir a segurança do sistema.

### ALLOWED_HOSTS
A lista de hosts permitidos que podem se comunicar com o servidor Django. Isso é importante para prevenir ataques de host spoofing.

### CORS_ALLOWED_ORIGINS
Lista de origens permitidas para comunicação de recursos de origens cruzadas (CORS). Isso é útil para permitir que clientes web acessem recursos da API a partir de diferentes domínios.

### MEDIA_URL e MEDIA_ROOT
As configurações MEDIA_URL e MEDIA_ROOT controlam o armazenamento e o acesso a arquivos de mídia, como imagens e vídeos enviados pelos usuários.

### EMAIL_BACKEND e configurações de e-mail
Estas configurações controlam o backend de e-mail usado pelo Django para enviar e-mails, juntamente com as configurações específicas do servidor de e-mail, como host, porta e credenciais.

### CKEditor e CKEditor Uploader
Configurações relacionadas ao CKEditor, um editor de texto enriquecido usado para entrada de conteúdo. As configurações incluem a versão do CKEditor, o caminho de upload de arquivos e outras opções de configuração.

### INSTALLED_APPS
Lista de aplicativos instalados no projeto Django. Isso inclui os aplicativos padrão do Django, bem como aplicativos de terceiros adicionais.

### MIDDLEWARE
Lista de middlewares usados para processar solicitações HTTP e respostas antes e depois que elas atingem as views. Isso inclui middlewares de segurança, middleware CORS e outros.

### DATABASES
Configurações do banco de dados usado pelo Django. Neste caso, está configurado para usar SQLite3 como o banco de dados padrão.

### STATICFILES_DIRS e STATIC_URL
Configurações relacionadas aos arquivos estáticos, como CSS, JavaScript e imagens. STATICFILES_DIRS define os diretórios onde os arquivos estáticos são armazenados, enquanto STATIC_URL define o URL base para acessar esses arquivos.

### LOGGING
Configurações de logging para o projeto Django. Isso inclui o nível de log, o formato do log e o destino do log.

### JAZZMIN_SETTINGS
Configurações personalizadas para o painel de administração do Django. Essas configurações controlam a aparência e o comportamento do painel de administração.

## Admin
O backend pode ser acessado pelo /admin, através do qual os administradores do site podem fazer login e fazer alterações no banco de dados. 

## Requisitos 

Os requisitos do backend estão listados no arquivo [requirements.txt](/Backend/Arca/Arca/requirements.txt).

Para atualizar este arquivo, pode ser usado o comando `pip freeze > requirements.txt` usando o pip.

E para instalar todas as dependências listadas no arquivo pode ser usado `pip install -r requirements.txt`