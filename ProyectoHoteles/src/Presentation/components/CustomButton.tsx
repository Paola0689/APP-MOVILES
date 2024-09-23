import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface Props {
    text: string,
    onPress: () => void
}

const CustomButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity
    style={styles.customButton}
    onPress={() => onPress()}
    >
        <Text style={styles.Text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    customButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#0284FC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    Text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24
    }
});

export default CustomButton
