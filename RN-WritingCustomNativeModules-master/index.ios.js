/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  NativeModules
} from 'react-native';
import * as globalStyles from './style.global';

const {LibraryManager} = NativeModules;

console.log(NativeModules);

export default class WritingCustomNativeModules extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSelectImage = this.onSelectImage.bind(this);
  }

  onSelectImage() {
    LibraryManager.selectImage((filePath) => {
      console.log("onSelectImage", filePath);
      this.setState({selectedImageUrl: filePath})
    });
  }

  renderProfileImage() {
    if (this.state.selectedImageUrl) {
      return (
        <Image
          source={{ uri: this.state.selectedImageUrl }}
          style={styles.selectedImage}
        />
      );
    }
    return (
      <Button
        onPress={this.onSelectImage}
        title="Select Image"
        color="#841584"
        accessibilityLabel="Click to load image"
      />
    );
  }

  render() {
    return (
      <View style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}>
        {this.renderProfileImage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedImage: {
    width: 250,
    height: 250
  }
});

AppRegistry.registerComponent('WritingCustomNativeModules', () => WritingCustomNativeModules);
