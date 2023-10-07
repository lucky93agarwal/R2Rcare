import {
    StyleSheet,
    TextInput,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import email from '../../assets/icons/email.png';
import eye from '../../assets/icons/eye.png';
import lock from '../../assets/icons/lock.png';


const CustomEditText = (props) => {
    return (
        <View 
        style={{ 
            width: "100%", 
            height: 50, 
            marginVertical: 10, 
            flexDirection: 'row', 
            borderRadius: 5, 
            paddingHorizontal:20,
            borderWidth: 2, 
            borderColor: "#0F67FE", 
            backgroundColor: "white",
            alignItems:'center'  }}>
            <Image source={props.leftIcon=="email"?email:props.leftIcon=="lock"?lock:null} resizeMode="contain" style={{ width: 20, height: 20 }} />
            <TextInput
                style={{ fontSize: 16, width: "85%", paddingLeft: 20, color : "blue"}}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder={props.title}
                placeholderTextColor="#000" 
                onChangeText={props.onPasswordEntry}
                
            />
            <Image source={props.rightIcon=="eye"?eye:null} resizeMode="contain" style={{ width: 20, height: 20 }} />
        </View>
    );
}

export default CustomEditText;