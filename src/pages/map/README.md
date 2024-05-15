# Mapa Interativo

Para implementação do mapa interativo personalizado foi utilizada a biblioteca react-leaflet em combinação com a biblioteca axios para chamada da API do site com o objetivo de obter informações das plantas registradas no backend

## [React-Leaflet](https://react-leaflet.js.org/docs/start-introduction/)

 A biblioteca React-Leaflet foi utilizada para implementação do mapa interativo personalizado utilizando como base o desenho da Arca, nesse caso, foi realizada a definição do componente `<Mapa/>` em "components/map/index.tsx" com a utilização de:

 * `ImageOverlay`
    * Utilizado para conseguir setar o mapa sobre a imagem personalizada do mapa
 * `markerCluster`
    * Utilizado para aglomerar os pings do mapa de acordo com o zoom no mapa

 Para assim definir o mapa interativo com seus clusters de pings contendo a informação de cada planta no mapa

## [Axios](https://axios-http.com/docs/intro)

A biblioteca Axios foi utilizada para requisitar as informações das espécies presentes no mapa diretamente da API da arca, obtendo por sua vez coordenadas, imagens e apelidos de cada planta para conseguir apresentar tais informações ao se clicar no ping de cada planta no mapa na forma de Cards, componente declarado em "components/map/MapCard.tsx"

## Explicação geral
Deste modo, informações de todas as espécies no BD são requisitadas através da API da Arca em conjunto do Axios no `useEffect()` declarado dentro da página do mapa, realizando uma atualização das informações todas vez que o componente é montado ou algum id sofre atualização em suas informações.

As informações das espécies são passadas para o componente `<Mapa/>` onde cada uma de suas instâncias são mapeadas na forma de pings que são agrupados como clusters de pings de acordo com sua proximidade no zoom sobre o mapa.

Em `const popupContent = ReactDOMServer.renderToString(<MapCard specie={specie} />)`, presente na declaração da componente `<Mapa/>` em "components/map/index.jsx" as informações de cada espécie é estabelecida em seu card (aberto ao se clicar no ping referente à espécie).

### Filtragem por ID da planta
Acessando a url "/mapa/[id da planta]", realiza-se um processo de filtração no mapa interativo, visto em "components/map/index.tsx" no trecho de código `if(filter)`, mostrando assim no mapa, apenas os pings que representam a espécie definida por aquele ID. Tal função também pode ser acessada clicando no símbolo de ping presente no card da espécie na aba de espécies no site.

