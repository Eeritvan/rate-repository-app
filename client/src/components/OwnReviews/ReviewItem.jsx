import { View, StyleSheet, Dimensions, Pressable, Alert } from 'react-native';
import Text from "../Text";
import { useNavigate } from "react-router-dom";
import { theme } from '../../style/style';
import { format } from 'date-fns';
import useDeleteReview from '../../hooks/useDeleteReview';

const ReviewItem = ({ review, refetch }) => {
  const navigate = useNavigate();
  const width = Dimensions.get('window').width * 0.13;
  const formatedDate = format(review.createdAt, "dd.MM.y");
  const [deleteReview] = useDeleteReview();

  const deleteReviewAlert = () => {
    const alertSuccess = async () => {
      await deleteReview({ deleteReviewId: review.id})    
      await refetch()
    }

    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      { text: 'Cancel' },
      { text: 'Delete', onPress: () => alertSuccess() },
    ]);
  };


  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={[styles.Rating, { width, height: width }]}>
          <Text color='primaryBlue' fontWeight='bold'>
            {review.rating}
          </Text>
        </View>
        <View style={styles.Info}>
          <Text color='primary' fontWeight='bold'>
            {review.repository.fullName}
          </Text>
          <Text color='textSecondary'>
            {formatedDate}
          </Text>
          <Text color='primary'>
            {review.text}
          </Text>
        </View>
      </View>


      <View style={styles.container}>
        <Pressable style={ styles.SignInButton }
                   onPress={() => navigate(`/${review.repository.id}`)}>
          <Text color='white' fontWeight='bold' fontSize='subheading'>
            View repository
          </Text>
        </Pressable>

        <Pressable style={ [styles.SignInButton, {backgroundColor: '#ff5353'}] }
                   onPress={() => deleteReviewAlert()}>
          <Text color='white' fontWeight='bold' fontSize='subheading'>
            Delete review
          </Text>
        </Pressable>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 15
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  Rating: {
    borderRadius: 1000,
    borderColor: theme.colors.primary,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  Info: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  SignInButton: {
    margin: 10,
    backgroundColor: theme.colors.primary,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    width: '45%'
  }
});

export default ReviewItem