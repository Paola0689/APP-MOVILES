import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import CustomButton from './CustomButton';

interface Props {
    openGallery: () => void,
    openCamera: () => void,
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    onSelectImage?: (imageUri: string) => void
}

const TakePhoto = ({openGallery, openCamera, setModal, modal}: Props) => {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModal(!modal);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.modalText}>Seleccione una opción</Text>
        
                <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                openCamera(), setModal(false)}}>
              <Text style={styles.textStyle}>Cámara</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {openGallery(), setModal(false)}}>
              <Text style={styles.textStyle}>Galeria</Text>
            </Pressable>
              
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      width: 250,
      height: 200,
      margin: 20,
      backgroundColor: '#F5F5F5',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      width:200,
      height:50,
      marginTop: 10,
      backgroundColor: '#0284FC',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 22
    },
    modalText: {
      marginBottom: 5,
      textAlign: 'center',
      fontSize: 16
    },
  });

export default TakePhoto
