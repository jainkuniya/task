//import
import React from 'react';
import { 
	Text, 
	Image, 
	StyleSheet, 
	TouchableOpacity,
	ScrollView,
	Linking 
} from 'react-native';
import { CardSection, SubItems } from './common';

//more styles
const moreStyles = StyleSheet.create({
	imageStyle: {
		alignSelf: 'stretch',
		height: 200,
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
	const { 
		url, 
		author, 
		permalink, 
		title,
		created 
	} = data;
	const date = new Date(created);
	const { imageStyle, button } = moreStyles;
	return (
		<ScrollView>
			<CardSection>	    			
				<Image
					style={imageStyle}
					source={{ uri: url }}
				/>
				<SubItems
					textOne='Author'
					textTwo={author}
				/>
				<SubItems
					textOne='Title'
					textTwo={title}
				/>
				<SubItems
					textOne='Date'
					textTwo={date.toLocaleString()}
				/>
			</CardSection>
			<TouchableOpacity
				onPress={() => Linking.openURL('https://www.reddit.com'.concat(permalink))}
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
