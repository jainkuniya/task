//imports
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Spinner } from './common';
import RedditList from './RedditList';

export default class HomePage extends Component {
	render() {
		return (
			<View style={{ flex:1 }}>
				<RedditList />
				<Spinner />
				<Text>Unable to connect</Text>
			</View>
		);
	}
}
