import useSignIn from '../../hooks/useSignIn';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useNavigate } from "react-router-dom";
import { useApolloClient } from '@apollo/client';
import SignInForm from './SignInForm';

const SignIn = () => {
  const [signIn] = useSignIn();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    try {
      const response = await signIn({ username, password });
      await authStorage.setAccessToken(response.data.authenticate.accessToken);
      await apolloClient.resetStore();
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInForm onSubmit={onSubmit} />
  );
};

export default SignIn;