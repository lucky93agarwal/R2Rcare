
import { NavigationContainer } from '@react-navigation/native';
import logo from '../assets/icons/logo_with_name.png';
import VerticalSpace from './Comman/VerticalSpace';
import CustomButton from './Comman/CustomButton';
import CustomEditText from './Comman/CustomEditText';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';
import '../utils/global';






const LoginScreen = () => {
    const [password, setPassword] = useState(false)
    const onPasswordEntry = (data) => {



    }

    const onPress = () => {
       
        if (password) {
            console.warn("Login Successfully");
        } else {
            setPassword(true);
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <VerticalSpace height={10} />
                    <Image source={logo} resizeMode="contain" style={styles.highlight} />
                    <VerticalSpace height={20} />
                    <Text style={styles.title}>{global.signIn}</Text>
                    <VerticalSpace height={5} />
                    <Text style={styles.sublight}>{global.signInAndGetYour}</Text>
                    <VerticalSpace height={15} />

                    <View style={{ opacity: password ? 0 : 1, height: password ? 0 : 100 }}>
                        <Text style={styles.sublightTwo}>{global.emailAddress}</Text>
                        <CustomEditText title={"Email Address"} leftIcon={"email"} rightIcon={null} onPasswordEntry={onPasswordEntry} />
                    </View>



                    <View style={{ opacity: password ? 1 : 0, height: password ? 100 : 0 }}>
                        <Text style={styles.sublightTwo}>{global.password}</Text>
                        <CustomEditText title={"Password"} leftIcon={"lock"} rightIcon={"eye"} onPasswordEntry={onPasswordEntry} />
                    </View>



                    <CustomButton title={password ? "Sign In" : "Continue"} rightIcon={password ?'user':null} onPress={onPress} />
                </View>


            </ScrollView>

            <View style={styles.footContainer}>

                <Text style={styles.titleOne}>{global.dontHaveAnAccount}</Text>
                <Text style={styles.titleTwo}>{global.signUp}</Text>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    titleOne: {
        marginVertical: 10,
        alignItems: 'center',
        justifyContent:'center',
        color: "#818BA0"
    },
    titleTwo: {
        marginVertical: 10,
        marginHorizontal:5,
        alignItems: 'center',
        fontWeight:"800",
        justifyContent:'center',
        textDecorationLine: 'underline',
        color: "#FA4D5E",
    },
    footContainer: {
        height: 50,
        width: "100%",
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row'
    },
    contentContainer: {
        flex: 1, // pushes the footer to the end of the screen,
        marginVertical: 10
    },
    highlight: {
        width: 130,
        height: 90,
    },
    sublight: {
        fontWeight: '400',
        fontSize: 14,
        color: "#5D6A85",
    },
    sublightTwo: {
        fontWeight: '800',
        fontSize: 14,
        color: "black",
    },
    title: {
        fontWeight: '800',
        fontSize: 25,
        color: "black",
    },
    container: {
        flex: 1,
        backgroundColor: "#f2f5f9",
        padding: 30
    }
});

export default LoginScreen;


