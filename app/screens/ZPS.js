import React, { Component } from 'react';

import {
  StyleSheet,
  WebView,
} from 'react-native';

class ZPS extends Component {

  render() {
    return (
      <WebView
             source={{uri: this.props.navigation.state.params.link}}
           />
      );
  }

}

export default ZPS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
