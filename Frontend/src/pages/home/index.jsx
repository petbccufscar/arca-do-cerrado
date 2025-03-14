import React from 'react';
import PageCard from '../../components/home/PageCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { FaEarthAmericas, FaPagelines, FaNewspaper } from 'react-icons/fa6';
import ContributeForm from '../../components/layout/form/ContributeForm';
import ImagemVisita from '../../assets/home/visita.jpg';

import Imagem1 from '../../assets/home/Foto1.jpg';
import Imagem2 from '../../assets/home/Foto2.jpg';
import Imagem3 from '../../assets/home/Foto3.jpg';
import Imagem4 from '../../assets/home/Foto4.jpg';
import Imagem5 from '../../assets/home/Foto5.jpg';
import Imagem6 from '../../assets/home/Foto6.jpg';
import Imagem7 from '../../assets/home/Foto7.jpg';

const Home = () => {
    const fixedImages = [Imagem1, Imagem2, Imagem3, Imagem4, Imagem5, Imagem6, Imagem7];

    return (
        <div className='home'>
            <header className='relative mb-8'>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                    <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">A Arca do Cerrado</h1>
                </div>
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {fixedImages.map((imageUrl, index) => (
                        <SwiperSlide key={index}>
                            <img src={imageUrl} alt={`slide-${index}`} className='w-full h-[300px] object-cover filter brightness-75' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </header>

            <main className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
                <div className="space-y-12 grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <PageCard icon={<FaNewspaper />} name={"Blog"} desc={"Acompanhe as notícias da Arca."} path={"/blog"} />
                    <PageCard icon={<FaEarthAmericas />} name={"Mapa"} desc={"Conheça as espécies plantadas no jardim da Arca."} path={"/mapa"} />
                    <PageCard icon={<FaPagelines />} name={"Espécies"} desc={"Saiba mais sobre as espécies do jardim da Arca."} path={"/especies"} />
                </div>
            </main>

            <article className='flex flex-col py-8 px-4 mx-auto max-w-screen-xl lg:px-6'>
                <section className='flex flex-col justify-center text-center items-center py-8 lg:py-16 px-4 mx-auto max-w-screen-lg'>
                    <h2 className='text-4xl mb-4 text-neutral-700'>Sobre a Arca do Cerrado</h2>
                    <p className='text-center text-neutral-500 text-justify'>
                        A história da Arca remonta aos anos de 2007, quando houve uma forte movimentação discente em defesa do fragmento de Cerrado em que se localiza o câmpus da Universidade Federal de São Carlos, em São Carlos. Ao longo do tempo e com a realização do trabalho de cultivo, percebemos  que a dificuldade maior residia na falta de conhecimento a respeito da riqueza presente no fragmento, em particular, e no bioma Cerrado, de forma geral, por parte da maioria da comunidade acadêmica. Aos poucos, maturamos  a ideia de instalar na área urbana do câmpus um espaço onde seria reproduzida, em alguma medida, a exuberância daquela Natureza; visando oferecer oportunidade para apreciação de um patrimônio ainda pouco valorizado. Em 2015, essa ideia se concretizou com o início da instalação do jardim, e, em 2018, oficializou-se com a Atividade de Extensão “A Arca do Cerrado”. <br/>
                        O espaço onde o projeto se desenvolve está em uma área urbanizada, na Área Norte, em frente ao Departamento de Computação, e é ladeado por um passeio por onde transitam estudantes, funcionários e professores entre os prédios dos departamentos próximos (Matemática, Fisioterapia, Medicina entre outros), favorecendo a visitação e a contemplação. Há uma parte em que as plantas se destacam pelos seus frutos, alguns comestíveis, outros de interesse por aves. Em outra parte, estão as que se despontam pelas lindas floradas! <br/>
                        O espaço, inicialmente ocupado por um campo de capim (braquiária), foi lentamente se modificando pelas diversas mudas formadas a partir de sementes colhidas no fragmento do câmpus e  preparadas pelos membros da atividade de extensão. Visitamos frequentemente o fragmento de Cerrado, aprendendo sobre a sazonalidade das espécies e sua interação com o habitat. Nessas visitas, as sementes são coletadas e a beleza da natureza é registrada em imagens fotográficas, gerando um banco de cerca de 5 mil fotos. <br/>
                        Aos finais de semana, regularmente visitamos o jardim para fazer capinas, plantar novas mudas e realizar a manutenção da área. Ao longo dos trabalhos, outras atividades se tornaram relevantes, tal como a  divulgação do projeto para a comunidade externa e acadêmica, seja por meio de exibição de cartazes, seja por participação em palestras. Temos recebido visitas de pessoas interessadas nesse tipo de jardinagem, da comunidade acadêmica e externa: arquitetos, professores, alunos de graduação, alunos do ensino fundamental. <br/>
                        Até este ano de 2025, o espaço da Arca já reúne mais de 100 mudas de 85 espécies. E o plantel continua crescendo, buscando se tornar um local para quem busca conhecer um pouco do bioma Cerrado. Saiba mais no blog.
                    </p>
                    <img src={ImagemVisita} alt='Imagem Visita Crianças' className="max-h-[350px] w-full object-cover rounded-lg shadow-md mt-8" />
                </section>
            </article>
        </div>
    );
};

export default Home;
