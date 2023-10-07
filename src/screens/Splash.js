
import logo from '../assets/icons/logo.png';
import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import '../utils/global';




 

const SplashScreenComponent = ({navigation}) => {
  useEffect(()=>{
    console.warn("Splash screen");
    setTimeout(() => {
      navigation.navigate('Login', {name: 'Jane'});
    }, 5000);
  },[])
  return (
  <View style={styles.container}>
    <Image source={logo} resizeMode="contain" style={styles.highlight} />
    <Text style={styles.sublight}>99%</Text>
  
  </View>
  );
};

const styles = StyleSheet.create({

  highlight: {
    width:80,
    height:120,
    alignContent:"center",
    alignSelf:"center",
  },
  sublight: {
    fontWeight: '800',
    marginHorizontal:30,
    fontSize:20,
    color: "black",
    textAlign: 'center',
  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFFF"
  }
});

export default SplashScreenComponent;


