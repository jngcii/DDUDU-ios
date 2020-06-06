import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

export default function ({ navigation }) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>History</Text>

      <Button
        title='Close'
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#4a69bd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
