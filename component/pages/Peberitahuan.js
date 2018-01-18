/**
 * WRITTEN BY I GEDE ARI PUTRA
 */

import React, { Component } from 'react'; 
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  ListView,
  BackHandler
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Content, Icon } from 'native-base';
import Geocoder from 'react-native-geocoder';
var{width,height} = Dimensions.get('window');

export default class Pemberitahuan extends Component<{}>{

  static navigationOptions = {
    header: null,
  }; 

  constructor(props){
    super(props);
    this.state={
      myLatitude : -8.602317,
      myLongitude : 115.247312,
      provinsi : '',
      alamatPosisiUser : '',
      alamatTujuan : '',
      dataSource: new ListView.DataSource({rowHasChanged : (row1, row2)=> row1 !== row2}), 
    };
    this.item = [];
  }
  
  componentWillMount(){
    BackHandler.addEventListener('hardwareBackPress', this.backPressed);

    this.item.push(1);
    this.setState({
        dataSource : this.state.dataSource.cloneWithRows(this.item),
      });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
  }
  
  backPressed = () => {
    const { navigation } = this.props;
    navigation.goBack();
    navigation.state.params.onSelectScreen({ menuPage: true });
    return true;
  }
  
  
  render(){
    const { navigate } = this.props.navigation
    return(
      <View style={styles.container}>
      {/*status bar color and transparecy*/}
      <StatusBar
          backgroundColor = {"rgba(16, 19, 22,0.05)"}
          translucent
      />
      
      {/*header bar*/}
      <View style={{backgroundColor : '#01BEFE', width : width, height : 90, flexDirection : 'row'}}>
          <View style={{marginTop : 40, marginLeft : 10}}>
              <TouchableOpacity style={{width : 20}} onPress={()=>this.backPressed()}>
                  <Icon name="ios-arrow-back" style={{color : "white", fontSize : 30}}/>
              </TouchableOpacity>
          </View>
          <View style={{ width : width-60, marginTop : 40}}>
              <Text style={{color : 'white', textAlign : 'center', fontSize : 18, marginTop : 5}}>Pemberitahuan</Text>
          </View>
      </View>
     
      <ListView dataSource={this.state.dataSource} renderRow={(rowData) => 
        <View style={{flexDirection : 'row',width : width, height : 60, backgroundColor : 'white', marginTop : 3}}>
            <View style={{marginTop : 5,marginLeft : 10,backgroundColor : 'gray', height : 50, width : 50, borderRadius : 25}}>
                <View style={{position : 'absolute', zIndex : 1}}>
                    <Image source={require('./../images/wi.jpg')} style={{height : 50, width : 50, borderRadius : 50,alignSelf : 'center'}}/>
                </View>
                <Icon style={{color : 'white', textAlign : 'center', marginTop : 10,fontSize : 30}} name = "person"/>
            </View>
            <View>
                <Text style={{marginTop : 15, marginLeft : 10}}>Wiratma Jaya</Text>
                <Text style={{marginTop : 2, marginLeft : 10, fontSize : 11}}>20.00</Text>
            </View>
        </View>
        } 
        />
    </View>
    );
  }
}
  
const styles = StyleSheet.create({

container : {
  flex : 1,
  backgroundColor : '#EEEEEF',
  height : height,
  width : width
},
box:{
  width : 600,
  height : 50
},
content : {
  color: 'white',
  fontWeight: "bold",
  transform: [{ rotate: '45deg'}],
  left : 4,
  top : 3.8,
  fontSize : 17
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

