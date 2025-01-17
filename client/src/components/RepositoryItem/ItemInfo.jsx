import { View, Image } from 'react-native';
import Text from '../Text';
import { RepoStyle } from '../../style/style';

const ItemInfo = ({ ownerAvatarUrl, fullName, description, language }) => {
  return (
    <View style={RepoStyle.Top}>
      <View style={RepoStyle.TopAvatar}>
        <Image
          style={RepoStyle.Avatar}
          source={{uri: `${ownerAvatarUrl}`}}
        />
      </View>
      <View style={RepoStyle.TopInfo}>
        <Text fontSize='subheading' fontWeight='bold' testID='fullName'> {fullName} </Text>
        <Text color='textSecondary' testID='description'> {description} </Text>
        <Text backGround='blue' color='white' testID='language'> {language} </Text>
      </View>
    </View>
  );
};

export default ItemInfo;