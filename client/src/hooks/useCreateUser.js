import { useMutation } from '@apollo/client';
import { createUserMutation } from '../graphql/mutations';

const useCreateUser = () => {
  const [mutate] = useMutation(createUserMutation);

  const createUser = async ({ username, password }) => {
    const response = await mutate({
      variables: {user: {username, password}}
    });
    return response;
  };
  return [createUser];
};

export default useCreateUser;