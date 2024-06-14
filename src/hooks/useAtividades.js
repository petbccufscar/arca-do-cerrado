import useSWR from 'swr';
import { fetchEntity, createEntity, editEntity, deleteEntity } from './api';

const useAtividades = () => {
    const { data: atividades, error, isLoading, mutate } = useSWR('Atividade', fetchEntity);

    const createAtividade = async (newAtividadeData) => {
        try {
            const result = await createEntity('Atividade', newAtividadeData);
            mutate(existingData => [...existingData, result], false);
        } catch (error) {
            console.error(error);
        }
    }

    const updateAtividade = async (atividadeId, updatedAtividadeData) => {
        try {
            const result = await editEntity('Atividade', atividadeId, updatedAtividadeData);
            mutate(updatedData => updatedData.map(atividade => (atividade.id === atividadeId ? result : atividade)), false);
        } catch (error) {
            console.error(error);
        }
    }

    const deleteAtividade = async (atividadeId) => {
        try {
            await deleteEntity('Atividade', atividadeId);
            mutate(existingData => existingData.filter(atividade => atividade.id !== atividadeId), false);
        } catch (error) {
            console.error(error);
        }
    }

    return { atividades, error, isLoading, createAtividade, updateAtividade, deleteAtividade };
}

export default useAtividades;