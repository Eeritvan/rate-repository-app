import { View, Pressable, StyleSheet } from 'react-native';
import Text from '../Text';
import * as Linking from 'expo-linking';
import { theme } from '../../style/style';

const GitHubButton = ({ url }) => {
  return (
    <View style={styles.center}>
      <Pressable onPress={() => Linking.openURL(url)}>
        <View style={styles.button}>
          <Text color='white' fontSize='Tab'>
            Open in GitHub
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    marginBottom: 15,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default GitHubButton;