const API_BASE_URL = 'http://arcadocerrado.ufscar.br/api'; // URL para deploy
// const API_BASE_URL = 'http://localhost/api'; // URL para manutenção 
const token = import.meta.env.VITE_API_TOKEN;

export const handleResponse = async (response, errorMessage) => {
    try {
        const text = await response.text();  // Pega o corpo da resposta como texto
        const data = text ? JSON.parse(text) : {};  // Tenta fazer parse do texto se não estiver vazio
        if (!response.ok) {
            throw new Error(errorMessage || 'Algo deu errado.');
        }
        return data;
    } catch (error) {
        console.error('Erro ao parsear JSON:', error);
        throw new Error('Erro ao parsear resposta JSON');
    }
};

export const handleRequestError = (error) => {
    console.error('Error during API request:', error);
    throw error;
};

export const fetchEntity = async (entityType, entityId = '') => {
    try {
        const response = await fetch(`${API_BASE_URL}/${entityType}/${entityId}`);
        return handleResponse(response, `Error retrieving ${entityType} information`);
    } catch (error) {
        handleRequestError(error);
    }
};

export const editEntity = async (entityType, entityId, updatedEntityData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${entityType}/${entityId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEntityData),
        });
        return handleResponse(response, `Error editing ${entityType} information`);
    } catch (error) {
        handleRequestError(error);
    }
};

export const deleteEntity = async (entityType, entityId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${entityType}/${entityId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Token ${token}`, // Adicionando o token de verificação ao header
            },
        });
        return handleResponse(response, `Error deleting ${entityType}`);
    } catch (error) {
        handleRequestError(error);
    }
};

export const createEntity = async (entityType, newEntityData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${entityType}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`, // Adicionando o token de verificação ao header
            },
            body: JSON.stringify(newEntityData),
        });

        return handleResponse(response, `Error creating ${entityType}`);
    } catch (error) {
        handleRequestError(error);
    }
};