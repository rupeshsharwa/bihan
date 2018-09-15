import React, { Component } from 'react';
import { AsyncStorage, Picker ,View , Text } from 'react-native';
import SplashScreen from 'react-native-smart-splash-screen'
import { StackNavigator } from 'react-navigation';
import SecondScreen from './screens/SecondScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import SuccessStoryScreen from './screens/SuccessStoryScreen';
import GetStartedScreen from './screens/GetStartedScreen';
import SuccessStory from './screens/SuccessStory';
import Complaint from './screens/Complaint';
import ProductDetail from './screens/ProductDetail';
import ZPS from './screens/ZPS';



const ModalStack = (otl) => {
  return StackNavigator({
    GetStartedScreen: {
      screen: GetStartedScreen,
      navigationOptions: {
        header:null
      },
    },
    SecondScreen: {
      screen: SecondScreen,
      navigationOptions: {
       headerTitle: 'बिहान',
       headerStyle:{backgroundColor:'#03A9F4'},
       headerTitleStyle:{color:'#ffffff',fontSize:16},
     },
    },
    AboutUsScreen: {
      screen: AboutUsScreen,
      navigationOptions: {
       headerTitle: 'बिहान',
       headerStyle:{backgroundColor:'#03A9F4'},
       headerTitleStyle:{color:'#ffffff',fontSize:16},
     },
    },
    SuccessStory: {
      screen: SuccessStory,
      navigationOptions: {
       headerTitle: 'बिहान      ',
       headerStyle:{backgroundColor:'#03A9F4'},
       headerTitleStyle:{color:'#ffffff',fontSize:16},
     },
    },
    ZPS: {
      screen: ZPS,
      navigationOptions: {
       headerTitle: 'बिहान      ',
       headerStyle:{backgroundColor:'#03A9F4'},
       headerTitleStyle:{color:'#ffffff',fontSize:16},
     },
    },
    Complaint: {
      screen: Complaint,
      navigationOptions: {
       headerTitle: 'बिहान      ',
       headerStyle:{backgroundColor:'#03A9F4'},
       headerTitleStyle:{color:'#ffffff',fontSize:16},
     },
    },
    SuccessStoryScreen : {
      screen: SuccessStoryScreen,
      navigationOptions: {
       headerTitle: '  सफलता की कहानी      ',
       headerStyle:{backgroundColor:'#03A9F4'},
       headerTitleStyle:{color:'#ffffff',fontSize:16},
     },
    },
    ProductDetail : {
      screen: ProductDetail,
      navigationOptions: {
       headerTitle:'Product Detail',
       headerStyle:{backgroundColor:'#03A9F4'},
       headerTitleStyle:{color:'#ffffff',fontSize:16},
     },
    },
  },
        {
          mode: "modal",
          initialRouteName: otl ? "SecondScreen" : "GetStartedScreen"
        }
);
}



export default class App extends Component<{}> {
  constructor(props){
   super(props);
   this.state={
     otl:null,
   }
 }
  componentWillMount(){
 AsyncStorage.getItem('otl', (err, result) => {
   if (result === "true") {
     this.setState({otl:true})
   }else {
     this.setState({otl:false})
   }
 })
}

  componentDidMount () {
     SplashScreen.close({
        animationType: SplashScreen.animationType.scale,
        duration: 850,
        delay: 1000,
     })
}
  render() {

    if (this.state.otl == null) {
    return null ;
  }
  const Layout = ModalStack(this.state.otl);
      return (
      <Layout  />
     );
  }
}
