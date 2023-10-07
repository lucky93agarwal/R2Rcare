import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import user from '../../assets/icons/user.png';


const CustomButton = (props) => {
    return (
        <TouchableOpacity
        onPress={props.onPress}
            style={{
                width: "100%",
                height: 50,
                marginVertical: 20,
                backgroundColor: "#77429A",
                justifyContent: "center",
                alignItems: "center",
                borderRadius:10,
                flexDirection:'row'
            }}>
            <Text style={{
                color: "white",
                fontWeight: "400",
                fontSize: 15
            }}>{props.title}</Text>
            <Image source={props.rightIcon=="user"?user:user} resizeMode="contain" style={{ width:props.rightIcon=="user"? 20:0, height: 20,marginHorizontal:props.rightIcon=="user"?10:0 }} />
        </TouchableOpacity>
    );
}

export default CustomButton;