import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ItemScreen from './src/screens/ItemScreen';
import HistoryScreen from './src/screens/HistoryScreen';


const RootStack = createStackNavigator();

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
        <RootStack.Screen name='Home' component={HomeScreen} />
        <RootStack.Screen name='Item' component={ItemScreen} />
        <RootStack.Screen name='History' component={HistoryScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}