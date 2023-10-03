import {TouchableOpacity, View, StyleSheet, Alert} from "react-native";
import { useState } from 'react';

import { Camera, CameraType } from "expo-camera";
import { useRef } from "react";

import StyledText from './StyledText';

export default function MyCamera({changeImage}) {
    const [type, setType] = useState(CameraType.back);

    const ref = useRef(null);
    function flipCamera(){
        setType(
          type === CameraType.back
            ? CameraType.front
            : CameraType.back
        );
      }
      const takePicture = async () => {
  
        const options = {quality: 1, base64: true};
        const data = await ref.current.takePictureAsync(options);
        changeImage(data);
      };
    return (
        <View style={styles.cameraContainer}>
          <Camera style={styles.camera} type={type} ratio='16:9' ref={ref}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={flipCamera}>
                <StyledText>Flip Camera</StyledText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={takePicture}>
                <StyledText>Take Photo</StyledText>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
    );
}

const styles = StyleSheet.create({

  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    gap: 20,
  },
});