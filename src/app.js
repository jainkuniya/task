import React from 'react';
import { View } from 'react-native';
import { Header } from './components/common';

const App = () => {
  return (
	  <View style={{ flex: 1 }}>
	    <Header headerText="Reddit" />
	  </View>
  );
};

export default App;
