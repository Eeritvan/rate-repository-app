import { useParams } from 'react-router-native';
import { FlatList } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import useRepository from '../../hooks/useSingleRepo';
import ReviewItem from './reviewItem';

const SingleRepository = () => {
  const repoID = useParams().id;
  const { repository, loading } = useRepository(repoID);

  if (!loading) {
    return (
      <FlatList
        data={repository.reviews.edges}
        renderItem={({ item }) => <ReviewItem review={item.node} />}
        keyExtractor={(item) => item.node.id}
        ListHeaderComponent={() => <RepositoryItem repository={repository} />}
      />
    );
  };
};

export default SingleRepository;