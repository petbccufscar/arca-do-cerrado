import useSWR from 'swr';
import { fetchEntity, editEntity, deleteEntity } from './api';

const useMensagens = () => {
    const { data: mensagens, error, isLoading, mutate } = useSWR('Mensagem', fetchEntity);

    const createMensagem = async (newMensagemData) => {
        try {
            const result = await createEntity('Mensagem', newMensagemData);
            mutate(existingData => [...existingData, result], false); 
        } catch (error) {
            console.error(error);
        }
    }

    const updateMensagem = async (mensagemId, updatedMensagemData) => {
        try {
            const result = await editEntity('Mensagem', mensagemId, updatedMensagemData);
            mutate(updatedData => updatedData.map(mensagem => (mensagem.id === mensagemId ? result : mensagem)), false);   
        } catch (error){
            console.error(error);
        }
    }

    const deleteMensagem = async (mensagemId) => {
        try {
            await deleteEntity('Mensagem', mensagemId);
            mutate(existingData => existingData.filter(mensagem => mensagem.id !== mensagemId), false);
        } catch (error) {
            console.error(error);
        }
    }

    return { mensagens, error, isLoading, createMensagem, updateMensagem, deleteMensagem };
}


export default useMensagens;