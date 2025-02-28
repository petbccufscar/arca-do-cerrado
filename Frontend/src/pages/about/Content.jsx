import Imagem1 from '../../assets/about/Foto1.jpg';
import Imagem2 from '../../assets/about/Foto2.jpg';
import Imagem3 from '../../assets/about/Foto3.jpg';
import Imagem4 from '../../assets/about/Foto4.jpg';
import Imagem5 from '../../assets/about/Foto5.jpg';
import Imagem6 from '../../assets/about/Foto6.jpg';


export const sections = [
    {
        id: 1,
        title: 'Apresentação do site',
        content: ["Este site visa divulgar para o maior número de pessoas os resultados do trabalho que realizamos na Arca do Cerrado, na Universidade Federal de São Carlos.",
            "A Arca do Cerrado começou como um projeto independente e, em 2018, tornou-se uma Atividade de Extensão, coordenada pelo Prof. Maurício Figueiredo, desenvolvida por um grupo com o principal objetivo de informar e sensibilizar as pessoas para a beleza e a importância do Cerrado - mais especificamente o fragmento onde o câmpus da Universidade Federal de São Carlos está localizado.",
            <img
                key="Foto1"
                src={Imagem6}
                alt="FIGURA CERRADO"
                className="w-full max-w-[500px] rounded-lg shadow-md my-4 mx-auto"
            />,
            <p key='1' className="text-center text-sm italic text-gray-500">Imagem no fragmento de Cerrado onde fica a Ufscar</p>,
            <p key='2' className="text-center text-sm italic text-gray-500 mb-4">Crédito: Acervo Arca do Cerrado</p>,
            "O Cerrado é um dos domínios naturais com maior biodiversidade do Brasil e do mundo, mas, infelizmente, tem sido negligenciado e está desprotegido. A partir deste espaço no câmpus, queremos trazer o Cerrado de volta para a vida das pessoas - já que ele fica em uma área onde o Cerrado é nativo. Tanto que ele brota em todos os cantos da universidade! A Arca do Cerrado abriga um espaço público e um convite para todos conhecermos, respeitarmos, admirarmos e preservarmos.",
            "O espaço onde o projeto se desenvolve está em uma área urbanizada, na Área Norte, favorecendo a visitação e a contemplação de suas espécies. Há uma parte com plantas que dão frutos - alguns, comestíveis - e uma parte com vegetação que tem lindas floradas! A ideia é que as pessoas percebam que as plantas do Cerrado também são ornamentais e poderiam enfeitar e enriquecer os jardins de suas casas, assim como outros espaços do câmpus. Além de sua beleza, por serem nativas, as espécies demandam menos cuidados, como regas e adubação.",
            <p> Aqui, você vai encontrar um <a className='text-blue-500' href='/mapa'> mapa interativo</a> em escala, que representa a localização de cada uma de nossas mudas. Para facilitar sua navegação, apresentamos uma imagem ilustrativa do local. Ao clicar sobre a imagem, você será direcionado para a versão ampliada e, ao passar o mouse, aparecerão os pins que indicam as mudas plantadas. Clicando sobre um deles, aparecerá uma pequena caixa com o nome da planta. Clique em “Saiba mais” para ter acesso a fotos e informações básicas da espécie. Essas informações estão disponíveis também na página <a className='text-blue-500' href='/especies'>espécies</a>. </p>,
            <p> No <a className='text-blue-500' href='/blog'> blog </a>, comentamos sobre espécies presentes no fragmento na Ufscar que ainda não conseguimos reproduzir ou cultivar, visitas que recebemos, novidades de germinação, plantio, florada, frutificação de nossas espécies  etc., além de informações e opiniões relativas aos temas do Cerrado, jardinagem naturalista, natureza  etc.</p>,
            <p> Costumamos visitar o local frequentemente para as atividades de manutenção e você pode saber a data do próximo encontro para nos acompanhar no nosso <a className='text-blue-500' href="https://www.instagram.com/aarcadocerrado/" target="_blank" rel="noopener noreferrer" > Instagram </a>.</p>,
            <p> Se tiver dúvidas, sugestões ou quiser colaborar conosco, entre em <a className='text-blue-500' href='/facaparte'> contato </a>. </p>
        ]
    },
    {
        id: 2,
        title: 'Descrição da área de cultivo',
        content: ["O domínio Cerrado se distribui na maioria das regiões do Brasil - Norte, Nordeste, Centro-Oeste e Sudeste - e ao longo de toda essa extensão assume diferentes fisionomias (aparências). O fragmento de Cerrado onde está situado o câmpus da universidade tem suas características próprias. Aqui há espécies que também ocorrem no Centro-Oeste, como o pequi, por exemplo, que, no entanto, apresenta algumas diferenças, como o tamanho da árvore e dos frutos, que são menores, e menos espinhos no caroço. Além disso, parece que aqui também há espécies que não correm em outras regiões.",
            "Infelizmente, o Cerrado no estado de São Paulo se encontra muito reduzido, o que torna este fragmento ainda mais importante.",
            <img
                key="Foto2"
                src={Imagem3}
                alt="IMAGEM CAMALEÃO"
                className="w-full max-w-[500px] rounded-lg shadow-md my-4 mx-auto"
            />,
            <p key='3' className="text-center text-sm italic text-gray-500">Polychrus acutirostris - espécie de camaleão registrada no fragmento de Cerrado na Ufscar</p>,
            <p key='4' className="text-center text-sm italic text-gray-500 mb-4">Crédito: Márcia Martins</p>,
            "A área de Cerrado remanescente no câmpus tem cerca 124ha. Sua vegetação envolve as nascentes dos córregos do Fazzari e do Monjolinho, sendo que esta última é uma das fontes de abastecimento da cidade de São Carlos. A sua rica biodiversidade favorece a qualidade ambiental. Esta área faz parte de um corredor ecológico que é formado pelas matas ciliares dos córregos Espraiado e Martinha e as áreas de vegetação nativa da Embrapa e da Fazenda Lacerda, constituindo um dos maiores fragmentos de vegetação nativa da região de São Carlos.",
            "Segundo informações recentes, algumas espécies de aves indicadas como ameaçadas em diferentes níveis em âmbito estadual, entre elas, espécies endêmicas do Cerrado e espécies migratórias, além de outros 50 grupos de aves e 45 espécies de mamíferos e répteis ainda habitam e/ou podem ser vistas regularmente pela área.",
            <img
                key="Foto3"
                src={Imagem5}
                alt="IMAGEM TEIÚ"
                className="w-full max-w-[500px] rounded-lg shadow-md my-4 mx-auto"
            />,
            <p key='5' className="text-center text-sm italic text-gray-500">Salvator merianae. Espécie de teiú registrada no fragmento de Cerrado na Ufscar</p>,
            <p key='6' className="text-center text-sm italic text-gray-500 mb-4">Crédito: Márcia Martins</p>,
            "A área cultivada no projeto Arca do Cerrado procura expressar um pouco dessa abundância e a beleza de suas espécies vegetais.",
            "Originalmente, o espaço do jardim era coberto por vegetação de Cerrado, o que pode ser inferido pela sua proximidade ao fragmento no câmpus e pelo brotamento espontâneo de espécies endêmicas ali. Algumas das espécies têm troncos subterrâneos e pode ser que tenham resistido às  diversas  interferências ao longo dos anos, tais como podas de grama. Algumas das espécies presentes na área que surgiram espontaneamente são: gabiroba, araçá roxo, cipó-de-são-joão, alecrim-do-campo, uma Aegiphila, a Adenocalymma peregrina e uma Ouratea floribunda (caju-bravo, que chamamos de pimenta-flamengo, devido à cor de seus frutos). Algum tempo antes do início do projeto, já havia ali três indivíduos de indaiá-do-cerrado que, a pedido do Maurício, foram transplantados de uma área ao lado que seria utilizada para uma construção.",
            <img
                key="Foto4"
                src={Imagem2}
                alt="FIGURA POMAR ANTIGA"
                className="w-full max-w-[500px] rounded-lg shadow-md my-4 mx-auto"
            />,
            <p key='7' className="text-center text-sm italic text-gray-500">Imagem da área do jardim em seus primeiros anos de vida (2017)</p>,
            <p key='8' className="text-center text-sm italic text-gray-500 mb-4">Crédito: Acervo da Arca do Cerrado</p>,
            "O espaço fica em frente ao Departamento de Computação e é ladeado por um passeio por onde transitam estudantes, funcionários e professores entre os prédios dos departamentos próximos (Matemática, Fisioterapia, Medicina entre outros).",
            "Como não usamos elementos químicos para tratar as sementes nem outras técnicas artificiais de germinação e cultivo, e como não há muitos projetos que lidem com jardinagem envolvendo a vegetação de Cerrado na região, nosso conhecimento tem sido construído a partir da experiência prática.",
            "São cerca de 100 mudas de 40 espécies, de plantas selecionadas por sua beleza paisagística ou pelo fato de produzirem frutos comestíveis. Por conta do espaço reduzido, somente espécies de porte arbustivo ou menores são escolhidas.",
            "Muitos dos indivíduos vegetais presentes no espaço são desconhecidos da maioria das pessoas, atendendo um dos objetivos do projeto: atrair a atenção das pessoas seja pela beleza, seja pela curiosidade.",
            <p> Na seção <a className='text-blue-500' href='/especies'> espécies </a>  você pode conhecer algumas delas. </p>,
            "Para comportar o volume de trabalho e também para favorecer a manutenção, o espaço recebeu benfeitorias. A prefeitura do câmpus instalou torneiras, com material doado pela tradicional loja de materiais de São Carlos, Gualtieri. Também delimitamos o espaço com separadores, evitando o avanço da grama de áreas de jardins limítrofes.",
            <img
                key="Foto5"
                src={Imagem4}
                alt="IMAGEM PANORÂMICA ATUAL"
                className="w-full max-w-[500px] rounded-lg shadow-md my-4 mx-auto"
            />,
            <p key='9' className="text-center text-sm italic text-gray-500">Imagem da área do jardim mais recente (2023)</p>,
            <p key='10' className="text-center text-sm italic text-gray-500">Créditos: Acervo Arca do Cerrado</p>,
        ]
    },
    {
        id: 3,
        title: 'Histórico',
        content: ["Desde que chegou a São Carlos, em 2006, o Prof. Mauricio costuma visitar o fragmento de Cerrado no câmpus da Universidade Federal de São Carlos aos finais de semana. Maravilhado com as belezas e a riqueza da área, coletava algumas sementes e produzia mudas em sua casa, imaginando poder um dia contribuir para a propagação daquelas espécies.",
            "Em 2015, um grupo do qual fazia parte - que ansiava pela conservação do fragmento e realizava algumas ações nessa direção (Coletivo do Cerrado) - organizou um evento: Cerrado Livre. Fez parte de sua programação o plantio de 16 daquelas mudas em uma área sem uso em frente ao Departamento de Computação. Assim, em 13 de maio daquele ano, nascia o Pomar do Cerrado.",
            "Desde então, aos finais de semana, regularmente visitamos o local para fazer capinas, plantar novas mudas e realizar a manutenção da área, que foi ganhando um outro aspecto. Ao longo dos trabalhos, outras atividades se tornaram relevantes, tal como a  divulgação do projeto.",
            "Em fevereiro de 2018, apresentamos o projeto para a Pró-Reitoria de Extensão da universidade e fomos contemplados como Atividade de Extensão, que nomeamos A Arca do Cerrado: jardinagem para a valorização e recuperação do Cerrado.",
        ]
    },
    {
        id: 4,
        title: 'Atividades',
        content: ["Desde o início, realizamos visitas frequentes ao fragmento de Cerrado, aprendendo sobre a sazonalidade das espécies e sua interação com o habitat. Nessas visitas, capturamos a beleza da natureza em imagens fotográficas, gerando um banco de cerca de 5 mil fotos, que, embora de qualidade amadora, contêm um rico registro.",
            "Realizamos a coleta de sementes, formação e plantio de mudas. Organizamos o processo de construção de sementeiras com a numeração dos tubetes e o registro das datas de coleta e plantio.",
            "Visitamos a área para regar, capinar e realizar sua manutenção.",
            <p> Em várias oportunidades, o trabalho associado à Atividade de Extensão A Arca do Cerrado tem sido divulgado para a comunidade externa e acadêmica, seja por meio de exibição de cartazes, seja por participação em palestras. Temos recebido visitas de pessoas interessadas nesse tipo de jardinagem, da comunidade acadêmica e externa: arquitetos, professores, alunos de graduação, alunos do ensino fundamental. Saiba mais no <a className='text-blue-500' href='/blog'> blog </a>.</p>,
            <img
                key="Foto6"
                src={Imagem1}
                alt="IMAGEM VISITA CRIANÇAS"
                className="w-full max-w-[500px] rounded-lg shadow-md my-4 mx-auto"
            />,
            <p key='11' className="text-center text-sm italic text-gray-500">Visita de alunos da E. E. Prof. Adail Malmegrim Gonçalves</p>,
            <p key='12' className="text-center text-sm italic text-gray-500">Crédito: Ana Paula Sannicolo</p>,
        ]
    },
    {
        id: 5,
        title: 'Expectativas',
        content: ["Admitindo que a vida é dependente da Natureza e que o Cerrado faz parte dela, então o Cerrado herda sua importância. E, igualmente, se não é difícil associar a qualidade de vida à possibilidade de desfrutar de um ambiente integrado e sintonizado  à  Natureza, em que se possa estabelecer uma interação sinergética, então que seja assim com a presença humana no Cerrado.",
            "E por conta desse desenlace um tanto quanto esperançoso, chegamos a uma convergência de ideias, ou seja, entre as muitas expectativas, entendemos que estão de uma forma ou outra associadas a fazer com que o Cerrado seja contemplado e valorizado como algo imprescindível. ",
            "Assim, a Arca do Cerrado se empenha primeiramente em conquistar a atenção das pessoas de forma que aos poucos ajustem suas perspectivas e orientações, passando então a reconhecer a relevância do Cerrado, tornando-o assim merecedor de esforços para sua preservação e conservação.",
            <p> Ao longo dos anos, a expectativa vem se concretizando, conforme as muitas realizações gratificantes realizadas e que você pode conhecer no <a className='text-blue-500' href='/blog'> blog </a>. </p>,
            "Esperamos que o conhecimento que temos adquirido ao longo das atividades - coleta de sementes, preparação de sementes para germinação, produção de sementeiras, acompanhamento do crescimento entre outros aspectos - possam inspirar a criação de outros espaços dedicados ao cultivo e valorização do Cerrado na universidade e fora dela.",
            "Ficaremos muito contentes se pudermos colaborar com projetos com esses objetivos. ",
            <p> Se houver interesse em saber mais ou participar conosco, entre em <a className='text-blue-500' href='/facaparte'> contato </a>, se inscreva no <a className='text-blue-500' href='/blog'> blog </a> para receber notícias e nos siga no <a className='text-blue-500' href="https://www.instagram.com/aarcadocerrado/" target="_blank" rel="noopener noreferrer" > Instagram </a>.</p>,
        ]
    },
    {
        id: 6,
        title: 'Participantes',
        content: ["Participam voluntariamente do projeto pessoas de diferentes áreas de conhecimento, formações, profissões, gêneros e idades, com ou sem experiência no trato com as plantas.",
            "O interesse e a motivação do coordenador do Projeto, Mauricio Figueiredo, emergem de sua convicção de que a sociedade deve ser construída de forma integrada e harmônica com a Natureza e assim possibilitar uma vida sinergética com o ambiente que nos rodeia.",
        ]
    }
]