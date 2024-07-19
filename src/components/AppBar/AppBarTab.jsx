import { View, Pressable } from 'react-native';
import { Text } from '../Text';

const AppBarTab = ({ name }) => {
  return (
    <View>
      <Pressable onPress={() => console.log("pressed")}>
        <Text fontSize='Tab'> {name} </Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;