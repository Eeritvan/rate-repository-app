import useMe from "../../hooks/useMe";
import { View, StyleSheet, Dimensions, FlatList } from 'react-native';
import Text from "../Text";
import { theme } from '../../style/style';
import { format } from 'date-fns';

const ReviewItem = ({ review }) => {
  const width = Dimensions.get('window').width * 0.13;
  const formatedDate = format(review.createdAt, "dd.MM.y");

  return (
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
  );
};

const OwnReviews = () => {
  const { data } = useMe(fetchReviews = true);

  return (
    <FlatList
        data={data.reviews.edges}
        renderItem={({ item }) => <ReviewItem review={item.node} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 15
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
});

export default OwnReviews;