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
export default class Tujuan extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        {/*status bar color and transparecy*/}
        <StatusBar
            backgroundColor = {"rgba(16, 19, 22,0.05)"}
            translucent
        />
        
        {/*header bar*/}
        <View style={{backgroundColor : '#01BEFE', width : width, height : 70, flexDirection : 'row'}}>
            <View style={{marginTop : 30, marginLeft : 10}}>
                <TouchableOpacity style={{width : 20}}>
                    <Icon name="ios-arrow-back" style={{color : "white", fontSize : 30}}/>
                </TouchableOpacity>
            </View>
            <View style={{ width : width-80, marginTop : 30}}>
                <Text style={{color : 'white', textAlign : 'center', fontSize : 18, marginTop : 5}}>MRT</Text>
            </View>
            <View style={{position : 'absolute', top : 30, right : 10}}>
                <TouchableOpacity style={{width : 20}}>
                    <Icon name="refresh" style={{color : "white", fontSize : 30}}/>
                </TouchableOpacity>
            </View>
        </View>

        {/*Map main View*/}
        <MapView style={{height : height, width : width}} initialRegion={{
            latitude : -8.722982,
            longitude :115.182381,
            latitudeDelta : 0.0922,
            longitudeDelta : 0.0421
        }}
        >
        <MapView.Marker draggable
            coordinate ={{
                latitude: -8.722982,
                longitude: 115.182381,
            }}
            title = "Your event location"
            description = "long press to drag the marker"
        >
        <View style={styles.marker2}>
        <View style={styles.marker1}>
            <View style={styles.marker0}>
            <Text style={styles.content}>S</Text>
            </View>
        </View>
        </View>
        </MapView.Marker>

        <MapView.Marker draggable
            coordinate ={{
                latitude: -8.704813,
                longitude: 115.247312,
            }}
            title = "Your event location"
            description = "long press to drag the marker"
        >
        <View style={styles.marker2}>
        <View style={styles.marker1}>
            <View style={styles.marker0}>
            <Text style={styles.content}>D</Text>
            </View>
        </View>
        </View>
        </MapView.Marker>
        
        <MapViewDirections
            origin={{latitude :-8.722982, longitude : 115.182381 }}
            destination={{latitude : -8.541215, longitude : 115.323057}}
            apikey={"AIzaSyDi8pAFaNLoQPDgUaeH9tg4sN1G3jRc50o"}
            strokeWidth={3}
            strokeColor="blue"
        />
        </MapView>
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
