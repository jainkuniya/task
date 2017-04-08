//imports
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { Spinner } from './common';
import RedditList from './RedditList';
import { apiUrl } from '../utils/url';

export default class HomePage extends Component {

	constructor() {
		super();
		this.state = {
			data: [],
			isLoading: true,
			message: 'Please wait while loading...',
		};
	}

	componentWillMount() {
		// Make a GET request to get data
		axios.get(apiUrl)
			.then(response => this.setState({ 
				data: response.data.data.children,
				isLoading: false,
			}))
			.catch((error) => {
				console.log(error);
				this.setState({
					isLoading: false,
					message: 'Unable to load data'
				});
			}
		);
	}

	render() {
		const { isLoading, message, data } = this.state;
		return (
			<View style={{ flex: 1 }}>
				{!isLoading && <RedditList data={data} /> }
				{isLoading && <Spinner message={message} /> }
			</View>
		);
	}
}
