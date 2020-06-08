import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ItemScreen from './src/screens/ItemScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import configureStore from './src/redux/configureStore';

const { store, persistor } = configureStore();

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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <RootStack.Navigator mode='modal' headerMode='none'>
            <RootStack.Screen name='Home' component={HomeScreen} />
            <RootStack.Screen name='Item' component={ItemScreen} />
            <RootStack.Screen name='History' component={HistoryScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}