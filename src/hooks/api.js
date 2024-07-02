const API_BASE_URL = 'https://arca-do-cerrado.onrender.com/api';
const token = '9531bea1d31817927458a930e26731c590353f75';

export const handleResponse = async (response, errorMessage) => {
    if (!response.ok) {
        throw new Error(errorMessage);
    }
    return response.json();
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

        // Logando a resposta completa para debug
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        const responseData = await response.json();
        console.log('Response data:', responseData);

        return handleResponse(response, `Error creating ${entityType}`);
    } catch (error) {
        // Logando o erro para debug
        console.error('Request error:', error);
        handleRequestError(error);
    }
};

export const getUserByEmail = async (email) => {
    const response = await axios.get(`${API_BASE_URL}/Inscrito?email=${email}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};