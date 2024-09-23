import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, ToastAndroid, TouchableOpacity} from 'react-native';
import CustomButton from '../../components/CustomButton';
import useViewModel from './ViewModel'
import TexInput1 from '../../components/TexInput1';
import TexInput2 from '../../components/TextInput2';

const RegisterScreen = () => {

  const {name, lastname, email, phone, password, confPassword, onChange, register} = useViewModel();
    return (
        <View style={styles.container}>
            <Image
            source={require('../../../../assets/img.png')}
            style={styles.imageBackground}
            />

            <View style={styles.logoContainer}>
                <Image
                source={require('../../../../assets/photo2.png')}
                style={styles.logoImage}
                />

            </View>
    
        <View style={styles.form}>
            <Text style={styles.formText}>Registrarse</Text>
    
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

          <TexInput2
            image={require('../../../../assets/password.png')}
            placeholder='Contraseña'
            keyboard='default'
            property='password'
            onChangeText={onChange}
            value={password}
            secureTextEntry= {true}
            />

          <TexInput1
            image={require('../../../../assets/password2.png')}
            placeholder='Confirmar contraseña'
            keyboard='default'
            property='confPassword'
            onChangeText={onChange}
            value={confPassword}
            secureTextEntry= {true}
            />
    
            <View style={{marginTop: 10}}>
            
            <CustomButton text='ACEPTAR' onPress={() => register()}/>
    
            </View>

        </View>
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
            height: '45%',
            bottom: '15%',
          },
          form: {
            width: '100%',
            height: '70%',
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
            top: '3%'
          },
          logoImage: {
            width: 150,
            height: 150
          }
        });        

export default RegisterScreen
