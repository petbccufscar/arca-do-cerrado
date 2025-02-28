import useSWR from 'swr';
import { fetchEntity, editEntity, deleteEntity, createEntity } from './api';
import useEmail from './useEmail';
import { useState } from 'react';

const useInscrito = () => {
    const { sendAvisoInscricao, sendConfirmaInscricao } = useEmail();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { data: inscrito, error: fetchError, isLoading, mutate } = useSWR('Inscrito', fetchEntity);

    const createInscrito = async (newInscritoData) => {
        try {
            const { nome, email } = newInscritoData;
    
            // Verifica se já existe um inscrito com esse email
            const existingEmails = await fetchEntity('Inscrito');
            const emailExists = existingEmails.some(inscrito => inscrito.email === email);
    
            if (emailExists) {
                setError('Este e-mail já está cadastrado.');
                setSuccess('');
                return;
            }
    
            const result = await createEntity('Inscrito/', newInscritoData);
            mutate(existingData => [...existingData, result], false);
    
            await sendAvisoInscricao(nome);
            await sendConfirmaInscricao(email, nome);
            
            setSuccess('Obrigado por se inscrever!');
            setError('');
        } catch (error) {
            console.error(error);
            setError('Erro ao se inscrever. Tente novamente mais tarde.');
            setSuccess('');
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

    const getUserByEmail = async (email) => {
        try {
            if (inscrito && inscrito.length > 0) {
                const found = inscrito.find(item => item.email === email);
                if (found) {
                    return found;
                }
            }
            setError('Inscrito não encontrado.');
            return null;
        } catch (error) {
            console.error('Erro ao buscar usuário por email:', error);
        }
        return null;
    };

    const deleteInscrito = async () => {
        const email = window.prompt('Por favor, insira seu e-mail para cancelar a inscrição:');
        if (!email) {
            setError('Email não fornecido.');
            return;
        }
        const inscrito = await getUserByEmail(email);
        if (!inscrito) {
            setError('Inscrito não encontrado.');
            return;
        }
        try {
            await deleteEntity('Inscrito', inscrito.id);
            mutate(existingData => existingData.filter(item => item.id !== inscrito.id), false);
            setSuccess('Inscrição cancelada com sucesso.');
            setError('');
        } catch (error) {
            console.error('Erro ao deletar inscrito', error);
            setError('Erro ao cancelar inscrição.', error);
            setSuccess('');
        }
    }

    return { inscrito, success, error, isLoading, createInscrito, updateInscrito, deleteInscrito, getUserByEmail };
}

export default useInscrito;
