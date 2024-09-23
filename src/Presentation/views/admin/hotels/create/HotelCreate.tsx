import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomInput from '../../../../components/CustomInput';
import useViewModel from './ViewModel'
import TakePhoto from '../../../../components/TakePhoto';
import { StackScreenProps } from '@react-navigation/stack';
import ModalImage from '../../../../components/ModalImage';
import { HotelStackParamList } from '../../../../navigatior/AdminHotelsNavigator';

interface Props extends StackScreenProps<HotelStackParamList, 'HotelCreateScreen'>{};

const HotelCreateScreen = ({navigation, route}: Props) => {

  const {name, description, phone, image1, image2, image3, image4, refpoint, street, colony, onChange, onChangeRefPoint, takPhoto, pickImage, createHotel} = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);
  const [numImg, setnumImg] = useState(1);
  const [inputRefpoint, setInputRefpoint] = useState('');


  useEffect(() => {
    if(route.params?.refPoint){
      console.log("Valor:", route.params?.refPoint);
        onChangeRefPoint(route.params?.refPoint, route.params?.latitude, route.params?.longitude);
        setInputRefpoint(route.params?.refPoint);
    }
  
  }, [route.params?.refPoint])
  

  return (
  <View style= {styles.imageBackground}>
      <Image
          source={require('../../../../../../assets/fondCh.png')}
          style= {styles.imageBackground}
       />

    <View style={styles.form}>
    <ScrollView>
    <CustomInput
          image={require('../../../../../../assets/hotelc.png')}
          placeholder='Nombre del Hotel'
          keyboard='default'
          property='name'
          onChangeText={onChange}
          value={name}
      />

      <CustomInput
          image={require('../../../../../../assets/description.png')}
          placeholder='Descripción'
          keyboard='default'
          property='description'
          onChangeText={onChange}
          value={description}
      />

      <CustomInput
          image={require('../../../../../../assets/phonep.png')}
          placeholder='Telefono'
          keyboard='numeric'
          property='phone'
          onChangeText={onChange}
          value={phone}
      />


      <CustomInput
          image={require('../../../../../../assets/street.png')}
          placeholder='Calle'
          keyboard='default'
          property='street'
          onChangeText={onChange}
          value={street}
      />

      <CustomInput
          image={require('../../../../../../assets/home.png')}
          placeholder='Fraccionamiento'
          keyboard='default'
          property='colony'
          onChangeText={onChange}
          value={colony}
      />

      <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
      <CustomInput
          image={require('../../../../../../assets/gps.png')}
          placeholder='Establecer ubicacion en el mapa'
          keyboard='default'
          property='refpoint'
          onChangeText={onChange}
          value={inputRefpoint}
          editable={false}
      />
      </TouchableOpacity>
      


      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => {
          setnumImg(1)
          setModalVisible(true)
        }}>
        {
                    image1 == ''
                    ? <Image
                source={require('../../../../../../assets/imag.png')}
                style={styles.image}
                />
                :  <Image
                source={{uri: image1}}
                style={styles.image}
                />
                }
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          setnumImg(2)
          setModalVisible(true)
        }}>
        {
                    image2 == ''
                    ? <Image
                source={require('../../../../../../assets/imag.png')}
                style={styles.image}
                />
                :  <Image
                source={{uri: image2}}
                style={styles.image}
                />
                }
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          setnumImg(3)
          setModalVisible(true)
        }}>
        {
                    image3 == ''
                    ? <Image
                source={require('../../../../../../assets/imag.png')}
                style={styles.image}
                />
                :  <Image
                source={{uri: image3}}
                style={styles.image}
                />
                }
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          setnumImg(4)
          setModalVisible(true)
        }}>
        {
                    image4 == ''
                    ? <Image
                source={require('../../../../../../assets/imag.png')}
                style={styles.image}
                />
                :  <Image
                source={{uri: image4}}
                style={styles.image}
                />
                }
        </TouchableOpacity>

      </View>

      <TouchableOpacity
    style={styles.customButton}
    onPress={() => {
      createHotel();
    }}
    >
        <Text style={styles.ButtonText}>Añadir Hotel</Text>
    </TouchableOpacity>
    </ScrollView>
    </View>
      
    <ModalImage
            openCamera={takPhoto}
            openGallery={pickImage}
            modal={modalVisible}
            setModal={setModalVisible}
            numImg={numImg}
        />

    </View>  
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '50%',
    //bottom: '30%',
  },
  form:{ 
    width: '100%',
    height: '200%',
    marginTop: 160,
    backgroundColor: 'white',
    position: 'absolute',
    //borderTopLeftRadius: 50,
    //borderTopRightRadius: 50,
    padding: 7
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'contain'
  },
  imageContainer: {
    flexDirection: 'row'
  },
  customButton: {
    width: '50%',
    height: 50,
    backgroundColor: '#294CA7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 100
},
ButtonText: {
    color: 'white',
    fontSize: 24
}
});

export default HotelCreateScreen
