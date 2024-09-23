import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, ScrollView, ToastAndroid, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import useViewModel from './ViewModel'
import CustomInput from '../../../../components/CustomInput';
import { ClientStackParamList } from '../../../../navigatior/ClientStackNavigator';



const CreateCommentScreen = () => {

  const {comment, responseMessage, onChange, createCom} = useViewModel();
  useEffect(() => {
    if(responseMessage != ''){
    ToastAndroid.show(responseMessage, ToastAndroid.LONG);
  }
  }, [responseMessage])
 
  return (
    <ImageBackground
    style= {styles.backgroundImage}
    source={require('../../../../../../assets/Combackg.png')}>
        <View style={styles.background}>
        
        <View>
          
          <TextInput
            placeholder='Redactar Comentario'
            multiline={true}
            numberOfLines={4} // Puedes ajustar este valor según la cantidad de líneas que desees mostrar inicialmente
            onChangeText={(text) => onChange('comment',text)}
            value={comment}
            style={styles.TextInput}
        /> 

        </View>
       
        </View>
        <View style={{marginTop: 10}}>
            <TouchableOpacity
                style={styles.customButton}
                onPress={() => createCom()}
                >
                <Text style={styles.ButtonText}>Añadir Comentario</Text>
            </TouchableOpacity>
              </View>
        </ImageBackground>
        
        );
        }
    
        
        // HOT RELOAD
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: 'black',
          },
          imageBackground: {
            width: '200%',
            height: '90%'
          },
          background: {
            width: '90%',
            height: '70%',
            opacity: 1,
            backgroundColor: 'white',
            //backgroundColor: 'rgba(215, 215, 215, 0.7)',
            top: '10%',
            marginLeft: '5%',
            borderRadius: 20
          }, 
          Text: {
            fontWeight: 'bold',
            fontSize: 18,
            top: 25
          },
          TextInput: {
            top: '100%',
            borderBottomWidth: 2,
            borderBottomColor: '#0281CA',
            padding: 10,
            fontSize: 20,
            color: 'black'
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
          logoImage: {
            width: 150,
            height: 150
          },
          customButton: {
            width: '80%',
            height: 50,
            backgroundColor: '#120562',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            marginTop: 130,
            marginLeft: 40
        },
        ButtonText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 24
        },
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover'
          },
        });        

export default CreateCommentScreen
