import { Pressable, TextInput, View, StyleSheet } from 'react-native';
import Text from '../Text';
import { useFormik } from 'formik';
import { theme } from '../../style/style';
import * as yup from 'yup';
import useCreateUser from '../../hooks/useCreateUser';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from "react-router-dom";
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';


const TextField = ({ name, placeholder, formik, secure = false }) => {
  const { handleChange, touched, errors, values } = formik;
  return (
    <>
      <TextInput style={[
                   styles.FieldBox,
                   touched[name] && errors[name] ? { borderColor: 'red' } : {}
                 ]}
                 placeholder={placeholder}
                 value={values[name]}
                 onChangeText={handleChange(name)}
                 secureTextEntry={secure}
      />
      {touched[name] && errors[name] && (
        <Text style={{ color: 'red', marginLeft: 10 }}>{errors[name]}</Text>
      )}
    </>
  );
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(5)
    .max(30),
  password: yup
    .string()
    .required('Password is required')
    .min(5)
    .max(30),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match")
    .required('Password confirmation is required')
});

const SignUp = () => {
  const navigate = useNavigate();
  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const onSubmit = async ({ username, password }) => {
    try {
      await createUser({ username, password });
      const response = await signIn({ username, password });
      await authStorage.setAccessToken(response.data.authenticate.accessToken);
      await apolloClient.resetStore();
      navigate('/');
    } catch (e) {
      console.log(e)
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema,
    onSubmit
  });

  return (
    <View style={styles.BG}>
      <TextField name="username" placeholder="Username" formik={formik} />
      <TextField name="password" placeholder="Password" formik={formik} secure={true} />
      <TextField name="passwordConfirm" placeholder="Password confirmation" formik={formik} secure={true} />
      <Pressable style={ styles.SignInButton } onPress={formik.handleSubmit}>
        <Text color='white' fontWeight='bold' fontSize='subheading'>
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  BG: {
    backgroundColor: 'white',
    padding: 10
  },
  FieldBox: {
    marginTop: 10,
    marginHorizontal: 10,
    borderStyle: 'solid',
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  SignInButton: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: theme.colors.primary,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10
  }
});

export default SignUp;