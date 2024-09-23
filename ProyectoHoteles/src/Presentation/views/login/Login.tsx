import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewM from './ViewModel';
import TexInput1 from '../../components/TexInput1';
import TexInput2 from '../../components/TextInput2';


const LoginScreen = () => {

  const {email, password, onChange} = useViewM()

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

return (
    <View style={styles.container}>
        <Image
        source={require('../../../../assets/fondo.png')}
        style={styles.imageBackground}
        />

        <View style={styles.form}>
        <Text style={styles.formText}>Iniciar Sesión</Text>

        <View style={{marginTop: 15}}>
        <TexInput1
          image={require('../../../../assets/email1.png')}
          placeholder='Correo electrónico'
          keyboard='email-address'
          property='email'
          onChangeText={onChange}
          value={email}
        />
        </View>
      <View style={{marginTop: 15}}>
        <TexInput2
          image={require('../../../../assets/password.png')}
          placeholder='Contraseña'
          keyboard='default'
          property='password'
          onChangeText={onChange}
          value={password}
          secureTextEntry= {true}
        />
      </View>

        <View style={{marginTop: 30}}>
        
        <CustomButton text='ENTRAR' onPress={() => {
          console.log('Email: ', email);
          console.log('Password: ', password);
        }}/>

        </View>

        <View style={styles.Register}>
        <Text>¿No tienes cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.TextRegister}> Registrate</Text>
        </TouchableOpacity>
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
        height: '100%',
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
      Register: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 10
      },
      TextRegister: {
        color: 'blue',
        fontWeight: 'bold',
        //borderBottomWidth: 2,
        //borderBottomColor: 'blue'
      }
    });
    

export default LoginScreen
