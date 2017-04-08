//import
import React from 'react';
import { 
	View, 
	Text, 
	Image, 
	StyleSheet, 
	TouchableOpacity,
	ScrollView,
	Linking } from 'react-native';
import { CardSection } from './common';

//more styles
const moreStyles = StyleSheet.create({
	itemStyle: {
		alignSelf: 'stretch'
	},
	heading: {
		fontSize: 18,
		color: 'black',
	},
	smallItem: {
		margin: 4,
	},
	button: {
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 16,
		padding: 8,
		backgroundColor: 'rgba(230,230,250,1)',
	}
});

const ListItem = ({ data, navigator }) => {
	const { url, author, permalink } = data;
	const { itemStyle, heading, smallItem, button } = moreStyles;
	return (
    	<ScrollView>
    		<CardSection>
	    			<View style={itemStyle} >
						<Image
				          style={{height: 200}}
				          source={{uri: url}}
				        />
				    <Text style={[heading, smallItem]}>Author:-</Text>
			      	<Text style={smallItem}>{author}</Text>
			      	</View>
			</CardSection>
			<TouchableOpacity
    			onPress={() => Linking.openURL('https://www.reddit.com' + permalink)}
    			style={button}
    		>
    			<Text>Open in Browser</Text>
			</TouchableOpacity>
    		<TouchableOpacity
    			onPress={() => navigator.pop()}
    			style={button}
    		>
    			<Text>Go Back</Text>
			</TouchableOpacity>
	    </ScrollView>
	  );
};

export default ListItem;