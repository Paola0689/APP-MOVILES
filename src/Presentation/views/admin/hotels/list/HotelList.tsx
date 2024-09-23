import React, { useEffect } from 'react'
import { FlatList, ImageBackground, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import useViewModel from './ViewModel';
import AdminHotelsListItem from './item';

const AdminHotelListScreen = () => {

  const {hotels, responseMessage, deleteHotel} = useViewModel();

  useEffect(() => {
    if(responseMessage !== ''){
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage])
  
  return (
    <ImageBackground
    style= {styles.backgroundImage}
    source={require('../../../../../../assets/fondHL.png')}>
      
    <View style={styles.container}>
      <FlatList
      data= {hotels}
      keyExtractor={ (item) => item.id!}
      renderItem={({item}) => <AdminHotelsListItem hotel={item} remove={deleteHotel}/>}
      />
    </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  container: {
    backgroundColor: 'rgba(136, 206, 235, 0.5)', 
    marginHorizontal: 5, 
    marginTop: 10}
})

export default AdminHotelListScreen
