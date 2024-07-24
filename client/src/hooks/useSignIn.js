import { useMutation  } from '@apollo/client';
import { Authenticate } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate] = useMutation(Authenticate);

  const signIn = async ({ username, password }) => {
    const response = await mutate({
      variables: { username, password }
    });
    return response; // Return the mutation response directly
  };
  return [signIn];
};
export default useSignIn;