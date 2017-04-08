//imports
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import RedditList from './components/RedditList';

//create class components
export default class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header headerText="Reddit" />
				<RedditList />
			</View>
		);
	}
}
