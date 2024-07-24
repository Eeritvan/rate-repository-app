import { View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import { styles } from '../style/style';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';

const Main = () => {
  return (
    <View style={styles.MainContainer}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signIn" element={<SignIn to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;