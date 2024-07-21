import { View, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import { styles } from '../../style/style';

const AppBar = () => {
  return (
    <View style={styles.TabContainer}>
      <ScrollView horizontal>
        <AppBarTab label='Repositories' path='/' />
        <AppBarTab label='Sign in' path='signIn' />
      </ScrollView>
    </View>
  );
};

export default AppBar;