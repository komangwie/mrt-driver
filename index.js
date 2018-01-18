
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Signup from './component/pages/Signup';
import Login from './component/pages/Login';
import Splash from './component/pages/Splash';
import Dashboard from './component/pages/Dashboard';
import Tujuan from './component/pages/Tujuan';
import Profile from './component/pages/Profile';
import Pemberitahuan from './component/pages/Peberitahuan';
import Riwayat from './component/pages/Riwayat';
export default class Index extends Component {

constructor(props){
	  super(props);
	  this.state={
		  tes : 'Menu'
	  };
}
	render(){
        const { navigation } = this.props;
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>
                <Login navigation={navigation}/>
			</View>
		);
	}
}

const SimpleNav = StackNavigator ({
    Splash : {screen : Splash},
    Login : {screen : Login},
	Signup : {screen : Signup},
	Dashboard : {screen : Dashboard},
	Tujuan : {screen : Tujuan},
	Profile : {screen : Profile},
	Pemberitahuan : {screen : Pemberitahuan},
	Riwayat : {screen : Riwayat}
});

const styles = StyleSheet.create({

	container:{
        flex: 1,
      
	}
  
});
AppRegistry.registerComponent('DriverMrt', () => SimpleNav);
