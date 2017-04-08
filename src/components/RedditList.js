//Import libraries
import React, { Component } from 'react';
import { View, Text, ListView, Navigator } from 'react-native';
import ListItem from './ListItem';
import DetailedView from './DetailedView';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

//Create class component
export default class RedditList extends Component {

	render() {
		return (
			<Navigator
				style={{flex: 1}}
		        initialRoute={{id: 'homeView', data: this.props.data}}
		        renderScene={this.navigatorRenderScene}/>
			
		);
	}

	navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'homeView':
      	const dataSource = ds.cloneWithRows(route.data);
        return (
        	<ListView
        		dataSource={dataSource}
        		renderRow={(rowData) => <ListItem item={rowData} navigator={navigator} />}
        	/>
        );
      case 'detailedView':
        return (
        	<DetailedView
        		data={route.data}
        		navigator={navigator}
        	/>);
    }
  }
}
