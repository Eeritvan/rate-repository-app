import { Pressable } from 'react-native';
import Text from '../Text';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from "react-router-dom";

const SignOutTab = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate('/');
  };

  return (
    <Pressable onPress={handleSignOut}>
      <Text fontSize='Tab'>
        Sign out
      </Text>
    </Pressable>
  );
};

export default SignOutTab;