import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React, {useEffect} from 'react';

  
  const VerticalSpace = (props)=>{
    return (
        <View  style={{marginVertical:props.height}}/>
    );
  }

  export default VerticalSpace;