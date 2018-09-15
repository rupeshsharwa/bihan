import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
class SuccessStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse:true
    };
  }

trunc(text) {
  return text.length > 40 ? `${text.substr(0, 40)}...` : text;
}

  render() {
    return (
      <View >
          <TouchableOpacity style={styles.list} onPress={()=>{ this.setState({collapse:!this.state.collapse}) }}>
          <Text style={{marginLeft:5,fontSize:16,color:'#000000',fontWeight:'bold',flex:1}}>{this.trunc(this.props.title)}</Text>
           <Image source={this.state.collapse ? require('../images/down.png') :  require('../images/up.png')} style={{marginRight:10}} />
          </TouchableOpacity>
          <Collapsible  collapsed={this.state.collapse} style={{backgroundColor:'#ffffff'}}>
                  {
                    this.props.data.map((d,j)=>{
                      if (d === '') {
                        return null ;
                      }else {
                        return (
                          <View  key={j} style={{paddingBottom:20}}>
                          <Text style={{fontSize:16,textAlign:'justify',marginLeft:5,color:'#000000'}} >{d}</Text>
                          </View>
                        )
                      }
                    })
                  }
          </Collapsible>
      </View>
    );
  }

}

export default SuccessStory;

const styles = StyleSheet.create({
  list:{
    flex:1,
    height:50,
    width:'100%',
    backgroundColor:'#efefef',
    justifyContent:'space-between',
    alignItems:'center',
    margin:2,
    borderColor:'black',
    flexDirection:'row'
  },

})
