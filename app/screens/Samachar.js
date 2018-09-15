import React, { Component } from 'react';

import {
  StyleSheet,
  WebView,
} from 'react-native';

class Samachar extends Component {

  render() {
    return (
      <WebView
             source={{uri: 'https://twitter.com/cgsrlm'}}
           />
      );
  }

}

export default Samachar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
