import {  View, TouchableHighlight, StyleSheet, Image, } from 'react-native';
import { useState } from 'react';
import { Camera,} from "expo-camera";
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

import StyledText from './StyledText';
import theme from '../theme';
import MyCamera from './MyCamera';

export default function Main (){
    const [image, setImage] = useState(null);
    const [hasPermission, requestPermission] = Camera.useCameraPermissions();

    
    if(!hasPermission || !hasPermission.granted || image){
      return (
        <View style={styles.container}>
          <StyledText title >Main</StyledText>
          
          {
            image && (
              <Image
                style={{aspectRatio: 16/9}}
                source={{uri: image.uri}}
              />
            )

          }
          <TouchableHighlight 
            style={styles.cameraContainer} 
            onPress={requestPermission}
          >
            <Image 
              style={styles.cameraImage}
              source={require('../../assets/camera.png')}
            />
          </TouchableHighlight>
          <StatusBar style="auto" />
        </View>
      );
    }
    
    
      return (
        <MyCamera changeImage={setImage}/>
      );


    
    }
    

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    padding: 8,
    flex: 1,
    backgroundColor: '#fff',
  },
  cameraContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  cameraImage: {
    width: 55,
    height: 55,
  },
});

