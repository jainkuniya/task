//import
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
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

const ListItem = ({ item, navigator }) => {
	const { thumbnail, author } = item.data;
	const { itemStyle, heading, smallItem } = moreStyles;
	return (
    	<Card>
    		<TouchableOpacity
    			onPress={() => navigator.push({id: "detailedView", data: item.data})}
    		>
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
			</TouchableOpacity>
	    </Card>
	  );
};

export default ListItem;