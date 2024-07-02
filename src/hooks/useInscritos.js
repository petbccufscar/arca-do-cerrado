import useSWR from 'swr';
import { fetchEntity, editEntity, deleteEntity, createEntity, getUserByEmail } from './api';
import useEmail from './useEmail';


const useInscrito = () => {
    const { sendAvisoInscricao, sendConfirmaInscricao } = useEmail();
    var success = '';
    const { data: inscrito, error, isLoading, mutate } = useSWR('Inscrito', fetchEntity);

    const createInscrito = async (newInscritoData) => {
        try {
            const result = await createEntity('Inscrito/', newInscritoData);
            mutate(existingData => [...existingData, result], false); 
            sendAvisoInscricao(nome);
            sendConfirmaInscricao(email, nome);
            success = 'Obrigado por se inscrever!';
        } catch (error) {
            console.error(error);
        }
    }

    const updateInscrito = async (inscritoId, updatedInscritoData) => {
        try {
            const result = await editEntity('Inscrito', inscritoId, updatedInscritoData);
            mutate(updatedData => updatedData.map(inscrito => (inscrito.id === inscritoId ? result : inscrito)), false);   
        } catch (error){
            console.error(error);
        }
    }

    const deleteInscrito = async () => {
        const email = window.prompt('Por favor, insira seu e-mail para cancelar a inscrição:');
        const inscrito = await getUserByEmail(email);
        try {
            await deleteEntity('Inscrito', inscrito.id);
            mutate(existingData => existingData.filter(inscrito => inscrito.id !== inscrito.id), false);
        } catch (error) {
            console.error(error);
        }
    }

    return { inscrito, success, error, isLoading, createInscrito, updateInscrito, deleteInscrito };
}

export default useInscrito;