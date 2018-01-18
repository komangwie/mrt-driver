import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Container, Content, Icon } from 'native-base';
var{width,height} = Dimensions.get('window');
export default class App extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
        {/*status bar color and transparecy*/}
        <StatusBar
            backgroundColor = {"rgba(16, 19, 22,0.05)"}
            translucent
        />
        
        {/*header bar*/}
        <View style={{backgroundColor : '#01BEFE', width : width, height : 90, flexDirection : 'row'}}>
            <View style={{marginTop : 40, marginLeft : 10}}>
                <TouchableOpacity style={{width : 20}}>
                    <Icon name="ios-arrow-back" style={{color : "white", fontSize : 30}}/>
                </TouchableOpacity>
            </View>
            <View style={{ width : width-60, marginTop : 40}}>
                <Text style={{color : 'white', textAlign : 'center', fontSize : 18, marginTop : 5}}>Menu</Text>
            </View>
        </View>
        <Content>
          <View style={{flexDirection : 'row', marginTop : 5}}>
              <View style={{ height : 100, width : width/3, backgroundColor : 'white', borderRightWidth : 3, borderRightColor : "#EEEEEF"}}>
                  <TouchableOpacity onPress={()=>navigate('Dashboard')}>
                      <Icon name="ios-flag" style={{marginTop : 20,color : 'rgb(55, 60, 68)', fontSize : 40, textAlign : 'center'}}/>
                      <Text style={{color : 'rgb(55, 60, 68)', textAlign : 'center'}}>Pasang Tujuan</Text>
                  </TouchableOpacity>
              </View>
              <View style={{ height : 100, width : width/3, backgroundColor : 'white', borderRightWidth : 3, borderRightColor : "#EEEEEF"}}>
                  <TouchableOpacity onPress={()=>navigate("Profile")}>
                      <Icon name="ios-notifications" style={{marginTop : 20,color : 'rgb(55, 60, 68)', fontSize : 40, textAlign : 'center'}}/>
                      <Text style={{color : 'rgb(55, 60, 68)', textAlign : 'center'}}>Pemberitahuan</Text>
                  </TouchableOpacity>
              </View>
              <View style={{ height : 100, width : width/3, backgroundColor : 'white', borderRightWidth : 0, borderRightColor : "#EEEEEF"}}>
                  <TouchableOpacity onPress={()=>navigate("Profile")}>
                      <Icon name="person" style={{marginTop : 20,color : 'rgb(55, 60, 68)', fontSize : 40, textAlign : 'center'}}/>
                      <Text style={{color : 'rgb(55, 60, 68)', textAlign : 'center'}}>Profil</Text>
                  </TouchableOpacity>
              </View>
           </View>
           <View style={{flexDirection : 'row', marginTop : 5}}>
           <View style={{ height : 100, width : width/3, backgroundColor : 'white', borderRightWidth : 3, borderRightColor : "#EEEEEF"}}>
                  <TouchableOpacity onPress={()=>navigate('Riwayat')}>
                      <Icon name="book" style={{marginTop : 20,color : 'rgb(55, 60, 68)', fontSize : 40, textAlign : 'center'}}/>
                      <Text style={{color : 'rgb(55, 60, 68)', textAlign : 'center'}}>Riwayat</Text>
                  </TouchableOpacity>
              </View>
           <View style={{ height : 100, width : width/3, backgroundColor : 'white', borderRightWidth : 3, borderRightColor : "#EEEEEF"}}>
                  <TouchableOpacity>
                      <Icon name="exit" style={{marginTop : 20,color : 'rgb(55, 60, 68)', fontSize : 40, textAlign : 'center'}}/>
                      <Text style={{color : 'rgb(55, 60, 68)', textAlign : 'center'}}>Keluar</Text>
                  </TouchableOpacity>
              </View>
           </View>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height : height,
    width : width
  },
  content : {
    color: 'white',
    fontWeight: "bold",
    transform: [{ rotate: '45deg'}],
    left : 4,
    top : 3
  },
  marker0:{
    height : 20,
    width : 20,
    backgroundColor:"#01BEFE",
    borderRadius : 10,
    left : 3,
    top : 5
  },
   marker1:{
    width : 30,
    height : 30,
    backgroundColor:"black",
    borderWidth: 1,
    borderColor: 'black',
    transform: [{ rotate: '-45deg'}],
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius : 50
  },
  marker2:{
    width : 40,
    height : 37,
    paddingLeft : 3,
    paddingRight : 3,
  }
});

AppRegistry.registerComponent('mrt', () => App);
