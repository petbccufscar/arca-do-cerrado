import useSWR from 'swr';
import { fetchEntity } from './api';

const useConfiguracao = () => {
    const { data: configuracao, error, isLoading } = useSWR('Configuracao/4', fetchEntity);

    return { configuracao, error, isLoading };
}

export default useConfiguracao;