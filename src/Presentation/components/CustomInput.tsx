import React from 'react'
import { View, Image, TextInput, StyleSheet, KeyboardType} from 'react-native'

interface Props {
    image?: any,
    placeholder: string,
    value: string,
    keyboard: KeyboardType,
    secureTextEntry?: boolean,
    editable?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void
}

const CustomInput = ({
    image, 
    placeholder, 
    value, 
    keyboard, 
    secureTextEntry = false,
    editable= true,
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
    style= {styles.TextInput}
    placeholder={placeholder}
    keyboardType={keyboard}
    value={value}
    onChangeText={ text => onChangeText(property, text)}
    secureTextEntry= {secureTextEntry}
    editable= {editable}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    formInput: {
      flexDirection: 'row',
      marginTop: 25,

      },
      TextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 10
      },
      Icon: {
        width: 25,
        height: 25,
        marginTop: 5,
        marginLeft: 5
      },
})

export default CustomInput
