import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Comment } from '../../../../../Domain/entity/Comment';
import { ClientStackParamList } from '../../../../navigatior/ClientStackNavigator';

interface Props{
    comment: Comment;
    navigation: StackNavigationProp<ClientStackParamList, 'CommentListScreen', undefined>
}

const ClientHotelsListItem = ({comment, navigation}: Props) => {
  
    return (
    <TouchableOpacity
    onPress={() => {}}
    >
        <View style={styles.container}>

        <View style={styles.inf}>
            <Text style={styles.title}>{comment.comment}</Text>
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
        width: 110,
        height: 80,
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
        marginTop: 3,
        fontWeight: 'bold'
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

export default ClientHotelsListItem
