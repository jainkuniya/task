//import
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, CardSection } from './common';

//more styles
const moreStyles = StyleSheet.create({
	itemStyle: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	heading: {
		fontSize: 18,
		color: 'black',
	},
	smallItem: {
		margin: 4,
	}
});

const ListItem = ({ item }) => {
	console.log(item);

	const { thumbnail, author } = item.data;
	const { itemStyle, heading, smallItem } = moreStyles;
	return (
    	<Card>
    		<CardSection>
    			<View style={itemStyle} >
					<Image
			          style={{width: 100, height: 100}}
			          source={{uri: thumbnail}}
			        />
			        <Text style={[heading, smallItem]}>Author:-</Text>
		      	<Text style={smallItem}>{author}</Text>
		      	</View>
		    </CardSection>
	    </Card>
  );
};

export default ListItem;