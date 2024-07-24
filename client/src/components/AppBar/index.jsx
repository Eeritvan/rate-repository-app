import { View, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import { styles } from '../../style/style';
import useMe from '../../hooks/useMe';
import SignOutTab from './SignOutTab';

const AppBar = () => {
  const { data } = useMe();

  return (
    <View style={styles.TabContainer}>
      <ScrollView horizontal>
        <AppBarTab label='Repositories' path='/' />
        {!data ? <AppBarTab label='Sign in' path='signIn' /> : <SignOutTab />}
      </ScrollView>
    </View>
  );
};

export default AppBar;