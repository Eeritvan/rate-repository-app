import { View } from 'react-native';
import { RepoStyle } from '../../style/style';
import ItemInfo from './ItemInfo';
import ItemStats from './ItemStats';

const RepositoryItem = ({ repository }) => {
  const { ownerAvatarUrl,
          fullName,
          description,
          language,
          stargazersCount,
          forksCount,
          reviewCount,
          ratingAverage } = repository;

  return (
    <View style={RepoStyle.Container} testID='repositoryItem'>
      <ItemInfo 
        ownerAvatarUrl={ownerAvatarUrl} 
        fullName={fullName} 
        description={description} 
        language={language} 
      />
      <ItemStats
        stargazersCount={stargazersCount} 
        forksCount={forksCount} 
        reviewCount={reviewCount} 
        ratingAverage={ratingAverage} 
      />
    </View>
  );
};
export default RepositoryItem;