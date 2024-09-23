import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ClientStackParamList } from '../../../../navigatior/ClientStackNavigator'
import useViewModel from './ViewModel'
import { Context } from '../../../../Context/Context'

interface Props extends StackScreenProps<ClientStackParamList, 'CommentListScreen'>{};
const CommentListScreen = ({navigation, route}: Props) => {
  const { comment, getComment} = useViewModel();
  const {user} = useContext(Context)

  useEffect(() => {
   getComment(); 
  }, [])

  return (
    <View style={{flex: 1, backgroundColor: 'white', height: '100%'}}>
      <View>
        <FlatList
        style = {{height: '80%'}}
          data = {comment}
          keyExtractor={(item) => item.id!}
          renderItem={({item}) => 
            <View style ={{padding: 10}}>
            <View style={styles.container}>
        <Image
        style= {styles.image}
        source={{uri: user.image}}
        />
          <Text style={styles.text}>{item.comment}</Text>
          </View>
          </View>}
        />
        </View>
        <View style={{top: 20}}>
        <TouchableOpacity style = {styles.WriteCommentContent}
        onPress={() => navigation.navigate('CreateCommentScreen')}
        >
        <Image
        source={(require('../../../../../../assets/writeCom.png'))}
        style= {styles.CommentIcon}
        />
        <View style= {styles.Info}>
          <Text style={styles.textComment}>Escribir Comentario</Text>
          </View>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    WriteCommentContent: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 10,
        marginHorizontal: 70,
      },
      container: {
        width: '85%',
        height: 'auto',
        borderColor: 'gray',
        borderBottomWidth: 1,
        alignContent: 'center',
        padding: 10,
        top: 20,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center'
      },
      text: {
        fontSize: 16,
        marginLeft: 15
      },
    Info: {
        marginHorizontal: 15
      },
    textComment: {
        fontSize: 20,
        color: '#010C72',
        fontWeight: 'bold',
      },
      CommentIcon: {
        width: 50,
        height: 50,
        marginLeft: 20
      },
      image: {
        width: 100,
        height: 80,
        borderRadius: 15
    },

})

export default CommentListScreen
