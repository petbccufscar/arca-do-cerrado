import useSWR from 'swr';
import { fetchEntity, editEntity, deleteEntity } from './api';

const usePosts = () => {
    const { data: posts, error, isLoading, mutate } = useSWR('Postagem', fetchEntity);

    const createPost = async (newPostData) => {
        try {
            const result = await createEntity('Postagem', newPostData);
            mutate(existingData => [...existingData, result], false); 
        } catch (error) {
            console.error(error);
        }
    }

    const updatePost = async (postagemId, updatedPostData) => {
        try {
            const result = await editEntity('Postagem', postagemId, updatedPostData);
            mutate(updatedData => updatedData.map(post => (post.id === postagemId ? result : post)), false);   
        } catch (error){
            console.error(error);
        }
    }

    const deletePost = async (postagemId) => {
        try {
            await deleteEntity('Postagem', postagemId);
            mutate(existingData => existingData.filter(post => post.id !== postagemId), false);
        } catch (error) {
            console.error(error);
        }
    }

    return { posts, error, isLoading, createPost, updatePost, deletePost };
}


export default usePosts;