import { FlatList } from 'react-native';
import RepositoryItem from '../RepositoryItem';

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={x => <RepositoryItem repository={x.item} />}
    />
  );
};

export default RepositoryListContainer;