# Arca do Cerrado - Especificações
O Arca do Cerrado é um site que visa alcançar o maior número de pessoas interessadas na preservação e conhecimento da biodiversidade do Cerrado. Oferecemos um mapa interativo em escala que representa a localização de cada uma de nossas mudas. Para facilitar a navegação, apresentamos uma imagem ilustrativa do mapa local. Ao clicar, o mapa interativo é apresentado, possibilitando o usuário a navegar entre as especies. Ao clicar em um pin, é mostrado as informações indiviuais. Essas informações também estão disponíveis na seção “espécies” do blog.

## Equipe 
### Arca do Cerrado
- Mauricio ()
- Lara  ()

### Desenvolvimento
- Caio Cadini ()
- Giullio Gerolamo ()
- João Otávio Langer ()
- Jorge Pires ()


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