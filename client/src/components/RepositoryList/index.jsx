import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const order = {
  'latest': {orderBy: 'CREATED_AT', orderDirection: 'DESC'},
  'highest': {orderBy: 'RATING_AVERAGE', orderDirection: 'DESC'},
  'lowest': {orderBy: 'RATING_AVERAGE', orderDirection: 'ASC'}
};

const RepositoryList = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(order.latest);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const { repositories } = useRepositories(selectedLanguage, debouncedSearchQuery);

  return <RepositoryListContainer repositories={repositories}
                                  selectedLanguage={selectedLanguage}
                                  setSelectedLanguage={setSelectedLanguage}
                                  order={order}
                                  searchQuery={searchQuery}
                                  setSearchQuery={setSearchQuery}
  />;
};

export default RepositoryList;