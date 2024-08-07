import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useMe = (fetchReviews = false) => {
  const { data, error, loading } = useQuery(GET_ME, {
    variables: { includeReviews: fetchReviews },
    fetchPolicy: 'cache-and-network'
  });

  return { data: data ? data.me : undefined, loading, error };
};

export default useMe;