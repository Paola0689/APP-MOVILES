import React from 'react';
import useViewModel from './ViewModel';
import { Hotel } from '../../../../Domain/entity/Hotel';
import { View, Text, FlatList, StyleSheet, ImageBackground, Image, TouchableOpacity, Button, TextInput} from 'react-native'
import { ClientStackParamList } from '../../../navigatior/ClientStackNavigator';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<ClientStackParamList, 'SearchDetailScreen'>{};
function SearchScreen({navigation, route}: Props) {
  const viewModel = useViewModel();

  const handleInputChange = (text: string) => {
    viewModel.setSearchQuery(text);
  };

  const handleSearch = () => {
    viewModel.handleSearch();
  };

  const renderItem = ({ item }: { item: Hotel }) => (
    <View style={styles.hotelItem}>
      
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SearchDetailScreen', {hotel: item})}>
        <Image
        style= {styles.image}
        source={{uri: item.image1}}
        />

        <View style={styles.inf}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.text}>{item.description}</Text>
            <Text style={styles.text}>{item.street}, {item.colony}</Text>
        </View>
    </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex:1, top: 60}}>
      <View style={styles.mainSearchContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.inputSearch}
            value={viewModel.searchQuery}
            onChangeText={handleInputChange}
            placeholder="Buscar"
          />
          <TouchableOpacity onPress={handleSearch}>
            <Image
              style={styles.icon}
              source={require('../../../../../assets/searchI.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      {viewModel.error && <Text>Error: {viewModel.error.message}</Text>}

      <FlatList
        data={viewModel.searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id!.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputSearch: { 
    width: '95%',
    height: 40,
    padding: 10
  },
  icon: {
    width: 40,
    height: 40
  },
  mainSearchContainer: {
    backgroundColor: '#A7A7A7',
    width: '90%',
    height: 50,
    alignItems: 'center',
    marginHorizontal: 20
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray', 
    backgroundColor: '#D3D3D3',
    borderWidth: 1,
    marginBottom: 10, 
    marginHorizontal: 25,
    top: 4
  },
  hotelItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    height: 70,
    marginHorizontal: 20,
    marginTop: 15,
    alignItems: 'center'
},
inf: {
  marginLeft: 15,
  flex: 1,
  textAlign: 'justify'
},
title: {
  color: 'black',
  fontSize: 15,
  fontWeight: 'bold'
},
text: {
  color: 'black',
  fontSize: 12,
  marginTop: 3,
  fontWeight: 'bold'
},
image: {
  width: 110,
  height: 80,
  borderRadius: 15
},
})

export default SearchScreen;
