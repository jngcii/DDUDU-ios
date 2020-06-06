import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import ListContainer from '../../components/ListContainer';

export default function ({ navigation }) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>To Do Lists</Text>

      <ListContainer />

      <View style={styles.navBar}>
        <Button
          title='Go to Item Screen'
          onPress={() => navigation.navigate('Item')}
        />
        <Button
          title='Go to Hsitory Screen'
          onPress={() => navigation.navigate('History')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
