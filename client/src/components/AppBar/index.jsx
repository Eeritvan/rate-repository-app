import { View, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import { styles } from '../../style/style';
import useMe from '../../hooks/useMe';
import SignOutTab from './SignOutTab';

const AppBar = () => {
  const { data } = useMe(fetchReviews = false);

  return (
    <View style={styles.TabContainer}>
      <ScrollView horizontal>
        <AppBarTab label='Repositories' path='/' />
        {data && <AppBarTab label='New review' path='newReview' /> }
        {data && <AppBarTab label='My reviews' path='ownReviews' /> }
        {!data ? <AppBarTab label='Sign in' path='signIn' /> : <SignOutTab /> }
        {!data && <AppBarTab label='Sign up' path='signUp' /> }
      </ScrollView>
    </View>
  );
};

export default AppBar;