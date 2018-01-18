import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Container, Content, Icon } from 'native-base';
import { StackNavigator } from 'react-navigation';
var{width,height} = Dimensions.get('window');
export default class App extends Component<{}> {
static navigationOptions = {
    header: null,
};

constructor(props){
    super(props);
    this.state={
      menuPage : false,
      myLatitude : -8.602317,
      myLongitude : 115.247312,
      provinsi : '',
      alamatPosisiUser : '',
      alamatTujuan : ''
    };
    //panggil fungsi untuk menentukan lokasi user sekarang
    this.getCurrentLocation();
}

componentWillMount() { 
    // this._animatedValue = new Animated.Value(0);
    BackHandler.addEventListener('hardwareBackPress', this.backPressed);
}  

componentWillUnmount() {
BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
}

componentDidUpdate=()=>{
    if(this.state.menuPage==true){
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
        this.setState({menuPage : false});
    }
}

unmountBackhandler=()=>{
BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
}

onSelectScreen = data => {
this.setState(data);
};

backPressed = () => {
// this.props.navigation.goBack();
    BackHandler.exitApp();
    return false;
}

gotoProfile = () => {
    const { navigate } = this.props.navigation;
    BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    navigate("Profile", { onSelectScreen : this.onSelectScreen  });
};

gotoTujuan = () => {
    const { navigate } = this.props.navigation;
    BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    navigate("Tujuan", { onSelectScreen : this.onSelectScreen  });
};

gotoPemberitahuan = () => {
    const { navigate } = this.props.navigation;
    BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    navigate("Pemberitahuan", { onSelectScreen : this.onSelectScreen  });
};

gotoRiwayat = () => {
    const { navigate } = this.props.navigation;
    BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    navigate("Riwayat", { onSelectScreen : this.onSelectScreen  });
};


//fungsi untuk menentukan lokasi user sekarang
getCurrentLocation=()=>{
//geolocation using getCurrentPosition
    navigator.geolocation.getCurrentPosition(
        (position)=>{
            this.setState({
                myLongitude: position.coords.longitude,
                myLatitude : position.coords.latitude
            });
        var area = {
            lat : this.state.myLatitude,
            lng : this.state.myLongitude
        };
        Geocoder.geocodePosition(area).then(res => {
                // res is an Array of geocoding object (see below)
                this.setState({
                provinsi : res[0].adminArea,
                alamatPosisiUser : res[0].formattedAddress
                });
            alert(res[0].adminArea);
            
            })
            .catch(err => alert(err));
        },(error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
    //getCurrentPositionEnd
}
  
  render() {
    const { navigate } = this.props.navigation
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
                <TouchableOpacity style={{width : 20}} onPress={()=>this.backPressed()}>
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
                  <TouchableOpacity onPress={()=>this.gotoTujuan()}>
                      <Icon name="ios-flag" style={{marginTop : 20,color : 'rgb(55, 60, 68)', fontSize : 40, textAlign : 'center'}}/>
                      <Text style={{color : 'rgb(55, 60, 68)', textAlign : 'center'}}>Pasang Tujuan</Text>
                  </TouchableOpacity>
              </View>
              <View style={{ height : 100, width : width/3, backgroundColor : 'white', borderRightWidth : 3, borderRightColor : "#EEEEEF"}}>
                  <TouchableOpacity onPress={()=>this.gotoPemberitahuan()}>
                      <Icon name="ios-notifications" style={{marginTop : 20,color : 'rgb(55, 60, 68)', fontSize : 40, textAlign : 'center'}}/>
                      <Text style={{color : 'rgb(55, 60, 68)', textAlign : 'center'}}>Pemberitahuan</Text>
                  </TouchableOpacity>
              </View>
              <View style={{ height : 100, width : width/3, backgroundColor : 'white', borderRightWidth : 0, borderRightColor : "#EEEEEF"}}>
                  <TouchableOpacity onPress={()=>this.gotoProfile()}>
                      <Icon name="person" style={{marginTop : 20,color : 'rgb(55, 60, 68)', fontSize : 40, textAlign : 'center'}}/>
                      <Text style={{color : 'rgb(55, 60, 68)', textAlign : 'center'}}>Profil</Text>
                  </TouchableOpacity>
              </View>
           </View>
           <View style={{flexDirection : 'row', marginTop : 5}}>
           <View style={{ height : 100, width : width/3, backgroundColor : 'white', borderRightWidth : 3, borderRightColor : "#EEEEEF"}}>
                  <TouchableOpacity onPress={()=>this.gotoRiwayat()}>
                      <Icon name="book" style={{marginTop : 20,color : 'rgb(55, 60, 68)', fontSize : 40, textAlign : 'center'}}/>
                      <Text style={{color : 'rgb(55, 60, 68)', textAlign : 'center'}}>Riwayat</Text>
                  </TouchableOpacity>
              </View>
           <View style={{ height : 100, width : width/3, backgroundColor : 'white', borderRightWidth : 3, borderRightColor : "#EEEEEF"}}>
                  <TouchableOpacity onPress={()=>this.backPressed()}>
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
