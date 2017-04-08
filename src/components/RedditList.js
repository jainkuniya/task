//Import libraries
import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

//Create class component
export default class RedditList extends Component {

	render() {
		const { data } = this.props;
		const dataSource = ds.cloneWithRows(data);
		return (
			<View>
				<ListView
					dataSource={dataSource}
					renderRow={(rowData) => <Text>Reddit Data Item</Text>}
				/>
			</View>
		);
	}
}
