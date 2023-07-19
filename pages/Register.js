import React,{useState} from "react";
import { View,Text,StyleSheet, } from "react-native";


import Input from "../components/Input/ınput";
import Button from "../components/Button/Button";
import { Alert } from "react-native";

function Register({navigation}){

    const [userName, setuserName] = useState(null);
    const [userSurname, setuserSurname] = useState(null);
    const [userAge, setuserAge] = useState(null);
    const [userPost, setuserPost] = useState(null);

    function submit(){
        
        if( !userName || !userSurname || !userAge || !userPost  ){
            Alert.alert('Hey Hey Calm Down','Bilgileri Doldur Koç ???');
            
            return;
        }
        user = {
            userName ,
            userSurname ,      //burayı silsek olur mu
            userAge ,
            userPost ,     
        }
        console.log(user)
        navigation.navigate('InfoScreen',{user});      
        
    }
    return(
        <View style={{ marginTop:100, }}>

            <Input label="Üye Adı" placeholder="Üye Adını Giriniz..." onChangeText={setuserName}/>
            <Input label="Üye Soyadı" placeholder="Üye Soydını Giriniz..." onChangeText={setuserSurname}/>
            <Input label="Üye Yaşı" placeholder="Üye Yaşını Giriniz..." onChangeText={setuserAge}/>
            <Input label="Üye E-Posta" placeholder="Üye E-Postaını Giriniz..." onChangeText={setuserPost}/>

            <Button text="Kaydı Tamamla" onPress={submit}/>
        </View>
    )
}


export default Register;