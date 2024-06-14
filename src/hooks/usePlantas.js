import useSWR from 'swr';
import { fetchEntity, editEntity, deleteEntity } from './api';
import { useEffect, useState } from 'react';

const usePlantas = () => {
    const { data: plantas, error, isLoading, mutate } = useSWR('Planta', fetchEntity);

    const createPlanta = async (newPlantaData) => {
        try {
            const result = await createEntity('Planta', newPlantaData);
            mutate(existingData => [...existingData, result], false); 
        } catch (error) {
            console.error(error);
        }
    }

    const updatePlanta = async (plantaId, updatedPlantaData) => {
        try {
            const result = await editEntity('Planta', plantaId, updatedPlantaData);
            mutate(updatedData => updatedData.map(planta => (planta.id === plantaId ? result : planta)), false);   
        } catch (error){
            console.error(error);
        }
    }

    const deletePlanta = async (plantaId) => {
        try {
            await deleteEntity('Planta', plantaId);
            mutate(existingData => existingData.filter(planta => planta.id !== plantaId), false);
        } catch (error) {
            console.error(error);
        }
    }

    return { plantas, error, isLoading, createPlanta, updatePlanta, deletePlanta };
}


export default usePlantas;