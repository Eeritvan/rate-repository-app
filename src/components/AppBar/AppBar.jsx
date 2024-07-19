import { View } from 'react-native';
import AppBarTab from './AppBarTab';
import { styles } from '../../style/style';

const AppBar = () => {
  return (
    <View style={styles.TabContainer}>
      <AppBarTab name='Repositories' />
    </View>
  );
};

export default AppBar;