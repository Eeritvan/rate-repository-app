import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const OrderMenu = ({selectedLanguage, setSelectedLanguage, order, searchQuery, setSearchQuery}) => {
  return (
    <View>
      <Searchbar
            style={styles.SearchBox}
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Latest repositories" value={order.latest} />
        <Picker.Item label="Highest rated repositories" value={order.highest} />
        <Picker.Item label="Lowest rated repositories" value={order.lowest} />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBox: {
    backgroundColor: 'white',
    borderRadius: 13,
    marginTop: 15,
    marginHorizontal: 15
  }
});

export default OrderMenu;