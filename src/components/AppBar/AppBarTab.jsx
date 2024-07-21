import { View } from 'react-native';
import Text from '../Text';
import { Link } from "react-router-native";

const AppBarTab = ({ label, path }) => {
  return (
    <View>
      <Link to={`/${path}`}>
        <Text fontSize='Tab'> {label} </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;