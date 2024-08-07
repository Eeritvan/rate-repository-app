import { View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import { styles } from '../style/style';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SingleRepository from './SingleRepository';
import NewReview from './NewReview';
import OwnReviews from './OwnReviews';

const Main = () => {
  return (
    <View style={styles.MainContainer}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/:id" element={<SingleRepository />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/newReview" element={<NewReview />} />
        <Route path="/ownReviews" element={<OwnReviews />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;