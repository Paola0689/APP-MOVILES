import React from 'react'
import { Hotel } from '../../../../../Domain/entity/Hotel';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../../App';

interface Props{
    hotel: Hotel;
    remove: (id: string) => void;
}

const AdminHotelsListItem = ({hotel, remove}: Props) => {
  
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
    <TouchableOpacity>
        <View style={styles.container}>
        <Image
        style= {styles.image}
        source={{uri: hotel.image1}}
        />

        <View style={styles.inf}>
            <Text style={styles.title}>{hotel.name}</Text>
            <Text style={styles.text}>{hotel.description}</Text>
            <Text style={styles.text}>{hotel.street}, {hotel.colony}</Text>
        </View>

        <View style={styles.iconContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('HotelUpdateScreen', {hotel: hotel})}
            >
                <Image
                style= {styles.icon}
                source={require('../../../../../../assets/editad.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => remove(hotel.id!)}>
                <Image
                style= {styles.icon}
                source={require('../../../../../../assets/delete.png')}
                />
            </TouchableOpacity>
        </View>
    </View>

    <View style={styles.divider}></View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 70,
        marginHorizontal: 20,
        marginTop: 15,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 70,
        borderRadius: 15
    },
    inf: {
        marginLeft: 15,
        flex: 1,
        textAlign: 'justify'
    },
    title: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    text: {
        color: 'black',
        fontSize: 12,
        marginTop: 3
    },
    iconContainer: {
        marginRight: 40
    },
    icon: {
        width: 40,
        height: 40,
        marginVertical: 1,
        marginLeft: 2
    },
    divider: {
        height: 1,
        backgroundColor: '#518CAE',
        flex: 1,
        marginTop: 15
    }
})

export default AdminHotelsListItem
