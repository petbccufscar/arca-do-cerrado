# Projeto

Este projeto foi desenvolvido utilizando **ReactJS** para a construção da interface de usuário e [**Tailwind CSS**](https://tailwindcss.com) para a estilização.

## Dependências

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

## Estrutura do Projeto

### /assets
Contém todas as imagens utilizadas no projeto, incluindo aquelas exibidas nas páginas "Sobre", "Home", "Contribua", além das imagens do mapa e as logos.

### /components
Contém os componentes gerais do projeto. Está dividido em subpastas:

- **paginas**: Componentes específicos de cada página.
- **layout**: Componentes gerais como `Footer`, `Form`, `Loading` e `Navbar`.

### /pages
Contém as páginas do projeto.

### /routes
Define as rotas do projeto.

### /styles
Define os estilos globais do projeto.

### /utils
Contém funções reutilizáveis no projeto.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/petbccufscar/arca-do-cerrado.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd seu-repositorio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o backend:
   ```bash
   npm run backend
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   //windows
   npm run backend
   ```
   ```bash
   //linux
   npm run start-server
   ```