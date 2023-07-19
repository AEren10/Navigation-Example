import React from "react";
import { View,Text,StyleSheet } from "react-native";

import Button from "../components/Button/Button";

function Welcome({navigation}){ 
    
    function RegisterForm(){
        navigation.navigate('RegisterScreen')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}> Welcome</Text>
            <Button text="Üye kayıt" onPress={RegisterForm}/>
        </View>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:15,
        justifyContent:'center'
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        margin:10,
    }
   
});