import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

function Info({route}){

    const {user} = route.params;     
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Üye Adı:  {user.userName}</Text>
            <Text style={styles.text}>Üye Soyadı:  {user.userSurname}</Text>
            <Text style={styles.text}>Üye Yası:  {user.userAge}</Text>
            <Text style={styles.text}>Üye Postası:  {user.userPost}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:100,
    },
    text:{
        fontSize:40,
        fontWeight:'bold',
        marginTop:10,
        
    }
})

export default Info;