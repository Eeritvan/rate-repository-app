import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useMe = () => {
  const { data, error, loading } = useQuery(GET_ME, {
    fetchPolicy: 'cache-and-network'
  });

  return { data: data ? data.me : undefined, loading, error };
};

export default useMe;