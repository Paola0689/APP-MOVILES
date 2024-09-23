import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, ScrollView, ToastAndroid, TouchableOpacity} from 'react-native';
import CustomButton from '../../components/CustomButton';
import useViewModel from './ViewModelUpdate'
import TexInput1 from '../../components/TexInput1';
import TexInput2 from '../../components/TextInput2';
import TakePhoto from '../../components/TakePhoto';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';



interface Props extends StackScreenProps<RootStackParamList, 'EditInformationScreen'>{};
const EditInformationScreen = ({navigation, route}:Props) => {

  const {user} = route.params;
  const {name, lastname, email, phone,  image, errorMessage, successMessage, onChange, update, pickImage, takPhoto} = useViewModel(user);
  const [modalVisible, setModalVisible] = useState(false);
  
  useEffect(() => {
    if(errorMessage != ''){
    ToastAndroid.show(errorMessage, ToastAndroid.LONG);
  }
  }, [errorMessage])

  useEffect(() => {
    if(successMessage != ''){
    ToastAndroid.show(successMessage, ToastAndroid.LONG);
  }
  }, [successMessage])

  return (
        <View style={styles.container}>
            <Image
            source={require('../../../../assets/img.png')}
            style={styles.imageBackground}
            />

            <View style={styles.logoContainer}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                {
                    image == ''
                    ? <Image
                    source={{uri: user?.image}}
                    style={styles.logoImage}
                />
                :  <Image
                source={{uri: image}}
                style={styles.logoImage}
                />
                }
                
              </TouchableOpacity>
                

            </View>
    
        <View style={styles.form}>
          <ScrollView>
              <TexInput1
              image={require('../../../../assets/user1.png')}
              placeholder='Nombre(s)'
              keyboard='default'
              property='name'
              onChangeText={onChange}
              value={name}
              />

            <TexInput2
              image={require('../../../../assets/user.png')}
              placeholder='Apellidos'
              keyboard='default'
              property='lastname'
              onChangeText={onChange}
              value={lastname}
              />

            <TexInput1
              image={require('../../../../assets/email1.png')}
              placeholder='Correo electrónico'
              keyboard='email-address'
              property='email'
              onChangeText={onChange}
              value={email}
              />

            <TexInput1
              image={require('../../../../assets/phone.png')}
              placeholder='Telefono'
              keyboard='numeric'
              property='phone'
              onChangeText={onChange}
              value={phone}
              />
      
              <View style={{marginTop: 20}}>
              
              <CustomButton text='Actualizar información' onPress={() => update()}/>
              </View>
            </ScrollView>
        </View>
        <TakePhoto
            openCamera={takPhoto}
            openGallery={pickImage}
            modal={modalVisible}
            setModal={setModalVisible}
        />
        <TouchableOpacity style = {styles.backContainer} onPress={() => navigation.goBack()}>
          <Image
            style = {styles.back}
            source={require('../../../../assets/back.png')}
          />
      </TouchableOpacity>
        </View>
        );
        }
        
        // HOT RELOAD
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: 'black',
          },
          imageBackground: {
            width: '100%',
            height: '70%',
            bottom: '15%',
          },
          form: {
            width: '100%',
            height: '50%',
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            padding: 30
          },
          formText: {
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center'
          },
          Text: {
            fontWeight: 'bold',
            fontSize: 16,
            top: 25
          },
          Text2: {
            fontWeight: 'bold',
            fontSize: 16,
            top: 25
          },
          formInput: {
            height: 40,
            flexDirection: 'row',
            marginTop: 10,
            backgroundColor: '#CDE7FF',
            borderRadius: 10
          },
          TextInput: {
            flex: 1,
            borderBottomColor: '#AAAAAA',
            marginLeft: 10
          },
          InputPassword: {
            flex: 1,
            borderBottomColor: '#AAAAAA',
            marginLeft: 5
          },
          Icon: {
            width: 25,
            height: 25,
            marginTop: 7,
            marginLeft: 20
          },
          IconPassword: {
            width: 40,
            height: 40,
            marginTop: 1,
            marginLeft: 12
          },
          Register: {
            flexDirection: 'row',
            justifyContent: 'center',
            top: 10
          },
          TextRegister: {
            color: 'blue',
            fontWeight: 'bold',
          },
          logoContainer: {
            position: 'absolute',
            alignSelf: 'center',
            alignItems: 'center',
            top: '10%'
          },
          logoImage: {
            width: 200,
            height: 200,
            borderRadius: 100
          },
          back: {
            width: 40,
            height: 40
          },
          backContainer: {
            position: 'absolute',
            top: 50,
            left: 20
          }
        });        

export default EditInformationScreen
