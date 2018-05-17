/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <View>
            <RNCamera
                ref={ref => (this.camera = ref)}
                type={RNCamera.Constants.Type.front}
                flashMode={RNCamera.Constants.FlashMode.on}
                faceDetectionMode={
                    RNCamera.Constants.FaceDetection.Mode.fast
                }
                faceDetectionLandmarks={
                    RNCamera.Constants.FaceDetection.Landmarks.all
                }
                faceDetectionClassifications={
                    RNCamera.Constants.FaceDetection.Classifications.all
                }
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={
                    'We need your permission to use your camera phone'
                }
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
