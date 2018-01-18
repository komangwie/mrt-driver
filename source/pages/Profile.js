/**
 * WRITTEN BY I GEDE ARI PUTRA
 */

import React, { Component } from 'react'; 
import {
  Platform, 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image, 
  BackHandler,
  Modal,
  AsyncStorage,
  StatusBar,
  Dimensions,
  Picker
} from 'react-native';

import { Content, Icon } from 'native-base';

var{width,height} = Dimensions.get('window');


export default class Profile extends Component<{}>{

  constructor(props){
    super(props);
    this.state =({
      nama :'',
      email : '',
      jenisKendaraan : 'Sepeda Motor'
    });
    
}
  render(){
		return(
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
                  <Icon  name="ios-arrow-back" style={{color : "white", fontSize : 30}}/>
              </TouchableOpacity>
          </View>
          <View style={{ width : width-60, marginTop : 30}}>
              <Text style={{color : 'white', textAlign : 'center', fontSize : 18, marginTop : 5}}>Profil</Text>
          </View>
      </View>
      <Content>
        <View style={{width : 100, height : 100, backgroundColor : 'gray', marginTop : 50, alignSelf : 'center', borderRadius : 50}}>
             <TouchableOpacity style={{height : 100, width : 100}}>
                <Icon style={{color : 'white', textAlign : 'center', marginTop : 35}} name="camera"/>
             </TouchableOpacity>
        </View>

         <View style={{flexDirection : 'row',width : width, paddingLeft : 20, marginTop : 10}}>
            <Icon name="person" style={{color : "black", fontSize : 25, marginTop : 10}}/>
            <TextInput underlineColorAndroid="black" style={{color : 'black', width : width-50, marginLeft : 10}} placeholder="Nama" placeholderTextColor='black' onChangeText={(email)=>this.setState({email})}/>
          </View>
          <View style={{flexDirection : 'row',width : width, paddingLeft : 20,}}>
            <Icon name="ios-phone-portrait" style={{color : "black", fontSize : 25, marginTop : 10}}/>
            <TextInput underlineColorAndroid="black" style={{color : 'black', width : width-50, marginLeft : 18}} placeholder="Nomor Telepon" placeholderTextColor='black' onChangeText={(email)=>this.setState({email})}/>
          </View>
          <View style={{flexDirection : 'row',width : width, paddingLeft : 20,}}>
            <Icon name="ios-mail" style={{color : "black", fontSize : 25, marginTop : 10}}/>
            <TextInput underlineColorAndroid="black" style={{color : 'black', width : width-50, marginLeft : 10}} placeholder="Email" placeholderTextColor='black' onChangeText={(email)=>this.setState({email})}/>
          </View>
          <View style={{flexDirection : 'row',width : width, paddingLeft : 20,}}>
            <Icon name="ios-bus" style={{color : "black", fontSize : 25, marginTop : 10}}/>
            <TextInput underlineColorAndroid="black" style={{color : 'black', width : width-50, marginLeft : 10}} placeholder="Nama Kendaraan" placeholderTextColor='black' />
          </View>
          <View style={{flexDirection : 'row',width : width, paddingLeft : 20,}}>
          <Icon name="ios-car" style={{color : "black", fontSize : 25, marginTop : 10}}/>
            <Picker
                mode = {'dropdown'}
                selectedValue={this.state.jenisKendaraan}
                onValueChange={(itemValue) => this.setState({jenisKendaraan: itemValue})}
                style={{marginLeft : 10,color : 'black', width : width-50, borderBottomWidth : 1, borderBottomColor : 'black'}}
                >
                <Picker.Item label="Sepeda Motor" value="Sepeda Motor" />
                <Picker.Item label="Mobil" value="Mobil" />
            </Picker>
          </View>
          <TouchableOpacity style={{width : width-100, height : 40, backgroundColor : '#01BEFE', borderRadius : 20, alignSelf : 'center', marginTop : 20, paddingTop : 8}} onPress={()=> navigate('Menu')}>
            <Text style={{color : 'white', textAlign : 'center', fontSize : 16}}>Simpan Perubahan</Text>
          </TouchableOpacity>
      </Content>
    </View>
		);
	}
}

const styles = StyleSheet.create({

  gambarBelakang: {
    flex :1
  },
logoText: {
    fontSize: 25,
    color:'#000',
    marginBottom:26,
    paddingBottom: 60
      },

      tekss :{
        justifyContent: 'center',
        alignItems : 'center'
      },

  container : {
    flex : 1,
    backgroundColor : 'white',
    height : height,
    width : width
  },
  
  loginButn: {
    width: width-150,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 27,
    marginVertical: 25,
    justifyContent: 'center',
    alignSelf : 'center'
  },

   kotakInput: {
    width:300,
    borderColor: '#fff',
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor:'transparent',


  },
  TombolLogin: {
    fontSize: 25,
    color: '#02ff06',
    textAlign: 'center'
  },
  loginButn: {
    width: 150,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 27,
    marginVertical: 15,
    justifyContent: 'center'
  }
});

