import useMe from "../../hooks/useMe";
import { FlatList } from 'react-native';
import ReviewItem from './ReviewItem';

const OwnReviews = () => {
  const { data, loading, refetch } = useMe(fetchReviews = true);

  if (!loading) {
    return (
      <FlatList
          data={data.reviews.edges}
          renderItem={({ item }) => <ReviewItem review={item.node} refetch={refetch} />}
      />
    );
  }
};

export default OwnReviews;