import Text from '../Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { theme } from '../../style/style';
import * as yup from 'yup';

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
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});
  
const SignInForm = ({onSubmit}) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.BG}>
      <TextField name='username' placeholder='Username' formik={formik} />
      <TextField name='password' placeholder='Password' formik={formik} secure={true} />
      <Pressable style={ styles.SignInButton } onPress={formik.handleSubmit}>
        <Text color='white' fontWeight='bold' fontSize='subheading'>
          Sign in
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

export default SignInForm;