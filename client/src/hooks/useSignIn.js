import { useMutation  } from '@apollo/client';
import { Authenticate } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate] = useMutation(Authenticate);

  const signIn = async ({ username, password }) => {
    const response = await mutate({
      variables: { username, password }
    });
    return response;
  };
  return [signIn];
};
export default useSignIn;