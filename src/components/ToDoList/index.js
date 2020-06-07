import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width: fullWidth } = Dimensions.get('screen');

export default function({ item }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text>{item.id}</Text>
        <Text>{item.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: fullWidth,
    height: '100%',
    padding: 15,
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
  }
});
