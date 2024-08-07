import { FlatList } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import OrderMenu from './OrderMenu';

const RepositoryListContainer = ({ repositories, selectedLanguage, setSelectedLanguage, order, searchQuery, setSearchQuery }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={x => <RepositoryItem repository={x.item} />}
      ListHeaderComponent={<OrderMenu
                             selectedLanguage={selectedLanguage}
                             setSelectedLanguage={setSelectedLanguage}
                             order={order}
                             searchQuery={searchQuery}
                             setSearchQuery={setSearchQuery}
      />}
    />
  );
};

export default RepositoryListContainer;