import { View } from 'react-native';
import { Text } from '../Text';
import { RepoStyle } from '../../style/style';

const ItemStats = ({ stargazersCount, forksCount, reviewCount, ratingAverage}) => {
    const countConverter = count => {
      if (count >= 1000) {
        const result = (count / 1000).toFixed(1);
        return `${result % 1 === 0 ? Math.round(result) : result}k`;
      }
      return count;
    };
  
    const Info = ({ count, label }) => (
      <View style={RepoStyle.BottomContainer}>
        <Text fontWeight='bold' fontSize='subheading'> {count} </Text>
        <Text color='textSecondary' fontSize='subheading'> {label} </Text>
      </View>
    );
  
    return (
      <View style={RepoStyle.Bottom}>
        <Info count={countConverter(stargazersCount)} label="Stars" />
        <Info count={countConverter(forksCount)} label="Forks" />
        <Info count={countConverter(reviewCount)} label="Reviews" />
        <Info count={countConverter(ratingAverage)} label="Rating" />
      </View>
    );
  };

export default ItemStats;