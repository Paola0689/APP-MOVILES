import React from 'react'
import { View, Image, TextInput, StyleSheet, KeyboardType} from 'react-native'

interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboard: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void
}

const TexInput2 = ({
    image, 
    placeholder, 
    value, 
    keyboard, 
    secureTextEntry = false,
    property,
    onChangeText

}: Props) => {
  return (
    <View style={styles.formInput}>
    <Image
    style={styles.Icon}
    source={image}
    />
    <TextInput
    style= {styles.InputText}
    placeholder={placeholder}
    keyboardType={keyboard}
    value={value}
    onChangeText={ text => onChangeText(property, text)}
    secureTextEntry= {secureTextEntry}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    formInput: {
        height: 40,
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: '#CDE7FF',
        borderRadius: 10
      },
      InputText: {
        flex: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 5
      },
      Icon: {
        width: 40,
        height: 40,
        marginTop: 1,
        marginLeft: 12
      },
})

export default TexInput2
