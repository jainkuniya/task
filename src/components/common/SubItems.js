import React from 'react';
import { View, Text } from 'react-native';

const SubItems = ({ textOne, textTwo }) => {
  return (
    <View style={styles.container} >
        <Text style={[styles.heading, styles.smallItem]}>{textOne}:-</Text>
        <Text style={styles.smallItem}>{textTwo}</Text>
    </View>
  );
};

const styles = {
  heading: {
    color: 'black',
  },
  smallItem: {
    margin: 4,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  }
};

export { SubItems };
