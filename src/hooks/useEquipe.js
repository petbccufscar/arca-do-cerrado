import useSWR from 'swr';
import { fetchEntity, editEntity, deleteEntity, createEntity } from './api';

const useEquipe = () => {
    const { data: equipe, error, isLoading, mutate } = useSWR('Equipe', fetchEntity);

    const createMembro = async (newMembroData) => {
        try {
            const result = await createEntity('Equipe', newMembroData);
            mutate(existingData => [...existingData, result], false); 
        } catch (error) {
            console.error(error);
        }
    }

    const updateMembro = async (membroId, updatedMembroData) => {
        try {
            const result = await editEntity('Equipe', membroId, updatedMembroData);
            mutate(updatedData => updatedData.map(membro => (membro.id === membroId ? result : membro)), false);   
        } catch (error){
            console.error(error);
        }
    }

    const deleteMembro = async (membroId) => {
        try {
            await deleteEntity('Equipe', membroId);
            mutate(existingData => existingData.filter(membro => membro.id !== membroId), false);
        } catch (error) {
            console.error(error);
        }
    }

    return { equipe, error, isLoading, createMembro, updateMembro, deleteMembro };
}

export default useEquipe;