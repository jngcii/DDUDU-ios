import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button
        title='Go to Detail'
        onPress={() => navigation.navigate('Modal')}
      />
      <Button
        title='Go to Detail'
        onPress={() => navigation.push('Detail')}
      />
    </View>
  );
}

function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
      <Button
        title='Go to Detail Again'
        onPress={() => navigation.push('Detail')}
      />
    </View>
  );
}

function ModalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title='뒤로 가기' />
    </View>
  )
}

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} />
      <MainStack.Screen name='Detail' component={DetailScreen} />
    </MainStack.Navigator>
  );
}

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
    <NavigationContainer>
      <RootStack.Navigator mode='modal' headerMode='none'>
        <RootStack.Screen name='Main' component={MainStackScreen} options={{ headerShow: false }} />
        <RootStack.Screen name='Modal' component={ModalScreen} options={{ headerShow: true }} />
      </RootStack.Navigator>
    </NavigationContainer>
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
