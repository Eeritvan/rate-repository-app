import Text from './Text';
import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import { styles } from '../style/style';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import useAuthStorage from '../hooks/useAuthStorage';
import { useNavigate } from "react-router-dom";
import { useApolloClient } from '@apollo/client';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = async ({ username, password }) => {
    try {
      const response = await signIn({ username, password }); // Use the direct response
      await authStorage.setAccessToken(response.data.authenticate.accessToken);
      await apolloClient.resetStore();
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  
  return (
    <View>
      <TextInput style={[
                 styles.FieldBox,
                 formik.touched.username && formik.errors.username
                   ? { borderColor: 'red' }
                   : {}
                 ]}
                 placeholder='Username'
                 value={formik.values.username}
                 onChangeText={formik.handleChange('username')} />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red', marginLeft: 10 }}>{formik.errors.username}</Text>
      )}
      <TextInput style={[
                 styles.FieldBox,
                 formik.touched.password && formik.errors.password
                   ? { borderColor: 'red' }
                   : {}
                 ]}
                 placeholder='Password'
                 value={formik.values.password}
                 onChangeText={formik.handleChange('password')} 
                 secureTextEntry={true} />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red', marginLeft: 10 }}>{formik.errors.password}</Text>
      )}
      <Pressable style={ styles.SignInButton } onPress={formik.handleSubmit}>
        <Text color='white' fontWeight='bold' fontSize='subheading'>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;