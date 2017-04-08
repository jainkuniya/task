//imports
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import HomePage from './components/HomePage';

//create class components
export default class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header headerText="Reddit" />
				<HomePage />
			</View>
		);
	}
}
