import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Button, Image, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import useViewModel from './ViewModel'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

interface Props extends StackScreenProps<RootStackParamList>{};

const ProfileScreen = ({navigation, route}: Props) => {

  const {signOff, user} = useViewModel();

  const [userImage, setUserImage] = useState(user?.image);

  useEffect(() => {
    if(user.id === ''){
      navigation.navigate('LoginScreen')
    }
  }, [user])
  


  return (
    <View style={styles.container}>
    <Image
    source={require('../../../../assets/img.png')}
    style={styles.imageBackground}
    />

<View style={styles.logoContainer}>
  {user?.image ? (
    <Image
      source={{ uri: user.image }}
      style={styles.logoImage}
    />
  ) : (
    <Image
      source={require('../../../../assets/photo.png')}
      style={styles.logoImage}
    />
  )}
</View>


    <View style={styles.form}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{marginLeft: 190, color: '#294CA7', fontWeight: 'bold'}}>Editar Informacion</Text>
    <TouchableOpacity onPress={() => navigation.navigate('EditInformationScreen', {user: user!})}>
          <Image
        source={(require('../../../../assets/edit.png'))}
        style= {{width:50, height:50, marginLeft: 2}}
        />
        </TouchableOpacity>
        </View>
      <View style = {styles.formUser}>
        <Image
        source={(require('../../../../assets/tarjet.png'))}
        style= {styles.ImageIcon}
        />
        <View style= {styles.Info}>
          <Text style={styles.Text}>{user?.name} {user?.lastname}</Text>
          <Text style={styles.TexDescription}>Nombre del usuario</Text>
          </View>

      </View>

      <View style = {styles.formUser}>
        <Image
        source={(require('../../../../assets/emailp.png'))}
        style= {styles.ImageIcon}
        />
        <View style= {styles.Info}>
          <Text style={styles.Text}>{user?.email}</Text>
          <Text style={styles.TexDescription}>Correo electronico</Text>
          </View>
      </View>

      <View style = {styles.formUser}>
        <Image
        source={(require('../../../../assets/phonep.png'))}
        style= {styles.ImageIcon}
        />
        <View style= {styles.Info}>
          <Text style={styles.Text}>{user?.phone}</Text>
          <Text style={styles.TexDescription}>Teléfono</Text>
          </View>

      </View>
      
    </View>

    <TouchableOpacity
    style={styles.customButton}
    onPress={() => {
      signOff();
    }}
    >
        <Text style={styles.ButtonText}>Cerrar Sesion</Text>
    </TouchableOpacity>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    width: '100%',
    height: '60%',
    bottom: '15%',
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    top: '5%'
  },
  logoImage: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  form: {
    width: '100%',
    height: '60%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 30
  },
  ImageIcon: {
    width: 42,
    height: 36,
    marginLeft: 10
  },
  formUser: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#B7F4E9',
    borderRadius: 10
  },
  Info: {
    marginHorizontal: 15
  },
  Text: {
    //fontWeight: 'bold',
    fontSize: 16
  },
  TexDescription: {
    color: '#A7A7A7',
    fontSize: 12
  },
  customButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#C6F4B5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 180,
    marginLeft: 40
},
ButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24
}
});

export default ProfileScreen
