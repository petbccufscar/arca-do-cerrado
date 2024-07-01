import useSWR from 'swr';
import { fetchEntity } from './api';

const useConfiguracao = () => {
    const { data, error, isLoading, mutate } = useSWR('Configuracao/4', fetchEntity);

    return { configuracao: data, error, isLoading };
}

export default useConfiguracao;