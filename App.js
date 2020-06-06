import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

export default function App() {
  const [ready, setReady] = useState(false);

  const startAsync = function() {
    return true;
  }

  if (!ready) {
    return (
      <AppLoading
        startAsync={startAsync}
        onFinish={() => setReady(true)}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
