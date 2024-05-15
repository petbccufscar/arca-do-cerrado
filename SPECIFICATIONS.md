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


### Envio de Email


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