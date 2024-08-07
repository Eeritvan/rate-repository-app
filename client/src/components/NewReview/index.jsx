import Text from '../Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { theme } from '../../style/style';
import * as yup from 'yup';
import useCreateReview from '../../hooks/useCreateReview';
import { useNavigate } from "react-router-dom";

const TextField = ({ name, placeholder, formik }) => {
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
      />
      {touched[name] && errors[name] && (
        <Text style={{ color: 'red', marginLeft: 10 }}>{errors[name]}</Text>
      )}
    </>
  );
};

const validationSchema = yup.object().shape({
  owner: yup
    .string()
    .required('Repository owner name is required'),
  repoName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Rating must be at least 0')
    .max(100, 'Rating must be at most 100'),
  review: yup
    .string()
    .notRequired()
});

const NewReview = () => {
  const navigate = useNavigate();
  const [createReview] = useCreateReview();

  const onSubmit = async () => {
    try {  
      await createReview({
      ownerName: formik.values.owner, 
      repositoryName: formik.values.repoName,
      rating: Number(formik.values.rating),
      text: formik.values.review
    });
    navigate(`/${formik.values.owner}.${formik.values.repoName}`);
    } catch (e) {
      console.log(e)
    };
  };

  const formik = useFormik({
    initialValues: {
      owner: '',
      repoName: '',
      rating: '',
      review: ''
    },
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.BG}>
      <TextField name="owner" placeholder="Repository owner name" formik={formik} />
      <TextField name="repoName" placeholder="Repository name" formik={formik} />
      <TextField name="rating" placeholder="Rating between 0 and 100" formik={formik} />
      <TextField name="review" placeholder="Review" formik={formik} />
      <Pressable style={ styles.SignInButton } onPress={formik.handleSubmit}>
        <Text color='white' fontWeight='bold' fontSize='subheading'>
          Create a review
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

export default NewReview;