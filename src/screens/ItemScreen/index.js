import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

export default function ({ navigation }) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Item Lists</Text>

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
    backgroundColor: '#f6b93b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
