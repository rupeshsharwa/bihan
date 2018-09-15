import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import VideoScreen from './VideoScreen';
import PDFScreen from './PDFScreen';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = (props) =>{
  return <VideoScreen navigation={props.route.navigation} style={{ backgroundColor: '#ff4081' ,flex:1}} />;
}
const SecondRoute = (props) => {
  return  <PDFScreen navigation={props.route.navigation}  style={{ backgroundColor: '#ff4081' ,flex:1}} />;
}

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Videos',navigation:this.props.navigation },
      { key: 'second', title: 'PDF Files',navigation:this.props.navigation },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
