import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaLocationDot } from 'react-icons/fa6'

const Pin = ({ x, y }) => {
    return (
        <div style={{ position: 'absolute', left: `${x}px`, bottom: `${y}px` }} className='z-10'>
            <FaLocationDot className='text-3xl' />
        </div>
    );
};


const Pins = ({ imageIndex, species }) => {

    function filterSpecies(species, index) {
        switch (Number(index)) {
            case 1:
                return species.filter(specie => specie.position[0] < 15 && specie.position[1] < 20)
            case 2:
                return species.filter(specie => specie.position[0] > 14 && specie.position[0] < 32 && specie.position[1] < 20)
            default:
                console.log("Entrou no default")
                return species;
        }
    }

    function getPosition(specie, index) {
        const multiplicador = 15;
        const positions = {
            1: { x: 152, y: 9 }, // 0, 0
            2: { x: 0, y: 2 }, // 20, 0
            3: { x: 0, y: 53 }, // 
            4: { x: 1, y: 23 },
            5: { x: 170, y: 151 },
            6: { x: 0, y: 170 } 
        };

        const position = positions[index];

        if (!position) {
            return { x: 0, y: 0 };  
        }
    
        const { x, y } = position;
        return { x: specie.position[0] * multiplicador + x, y: specie.position[1] * multiplicador + y };
    }
    
    return (
        <>
            {imageIndex != 'map' &&
                filterSpecies(species, imageIndex)
                    .map((specie, index) => {
                        const { x, y } = getPosition(specie, imageIndex);
                        return <Pin x={x} y={y} key={index} />;
                    })}
        </>
    )
}

const BigImage = ({ mainImage, species }) => {
    return (
        <div className="relative">
            <Pins imageIndex={mainImage} species={species} />
            <div
                className="min-w-[640px] min-h-[450px] bg-contain bg-no-repeat relative ml-2.5"
                style={{ backgroundImage: `url(../../src/assets/map/${mainImage}.png)` }}
                alt="Mapa Principal"
            />
        </div>
    )
}

const MainImage = ({ mainImage, setMainImage, species }) => {
    return (
        <div className='relative'>
            <img
                src={`../../src/assets/map/label/${mainImage}.png`}
                onClick={() => setMainImage('map')}
                className='cursor-pointer absolute bottom-0 right-0 min-w-[150px] max-h-[100px] object-cover z-10'
                alt="Mapa referência"
            />
            <img
                src='../../src/assets/map/label/rosa.png'
                className='absolute top-0 right-0 h-24 z-10 rotate-90'
                alt="Rosa dos Ventos"
            />
            <BigImage mainImage={mainImage} species={species} />
        </div>
    )
}

const MiniMap = ({ index, setMainImage }) => {
    return (
        <div onClick={() => setMainImage(`${index}`)} className='cursor-pointer'>
            <img src={`../../src/assets/map/${index}.png`} className='w-[150px] h-[200px] object-cover ' />
        </div>
    )
}

const MiniMaps = ({ index, setMainImage, setIndex }) => {
    const rightToggle = () => {
        setIndex([3, 4, 5, 6])
    }

    const leftToggle = () => {
        setIndex([1, 2, 3, 4])
    }
    return (
        <div className='flex gap-4 items-center text-3xl'>
            <FaChevronLeft className='cursor-pointer' onClick={() => leftToggle()} />
            {index.map((x, index) => (
                <MiniMap index={x} setMainImage={setMainImage} key={index} />
            ))}

            <FaChevronRight className='cursor-pointer' onClick={() => rightToggle()} />
        </div>
    )
}

const FixedMap = ({ species }) => {
    const [mainImage, setMainImage] = useState("map")
    const [index, setIndex] = useState([1, 2, 3, 4])

    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <MainImage mainImage={mainImage} setMainImage={setMainImage} species={species} />
            <MiniMaps index={index} setMainImage={setMainImage} setIndex={setIndex} />
        </div>
    )
}

export default FixedMap