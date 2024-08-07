import { View } from 'react-native';
import { RepoStyle } from '../../style/style';
import { useLocation, Link } from 'react-router-native';
import ItemInfo from './ItemInfo';
import ItemStats from './ItemStats';
import GitHubButton from './GitHubButton';

const RepositoryItem = ({ repository }) => {
  const locationPath = useLocation().pathname;
  const isRootLocation = locationPath === '//' || locationPath === '/';

  const { ownerAvatarUrl,
          fullName,
          description,
          language,
          stargazersCount,
          forksCount,
          reviewCount,
          ratingAverage,
          id,
          url } = repository;

  const content = (
    <>
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
        {!isRootLocation && <GitHubButton url={url} />}
      </View>
    </>
  )

  return (
    isRootLocation
    ? <Link to={`/${id}`}>
        { content }
      </Link>
    : content
  );
};

export default RepositoryItem;