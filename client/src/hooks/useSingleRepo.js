import { useQuery } from '@apollo/client';
import { GET_REPO } from '../graphql/queries';

const useRepository = (id) => {
  const { data, loading, error } = useQuery(GET_REPO, {
    variables: { id },
    fetchPolicy: 'cache-and-network'
  });

  return { repository: data ? data.repository : null, loading, error };
};

export default useRepository;
