import { View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar/AppBar';
import { styles } from '../style/style';

const Main = () => {
  return (
    <View style={styles.MainContainer}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;