import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Button, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ToDoList from '../../components/ToDoList';

const { width: fullWidth } = Dimensions.get('screen');

const DATA = [
  { id: 1, date: 'September 24 2020, 11:12 AM' },
  { id: 2, date: 'September 26 2020, 01:51 PM' },
  { id: 3, date: 'November 01 2020, 12:44 PM' },
  { id: 4, date: 'November 16 2020, 09:30 AM' },
  { id: 5, date: 'December 05 2020, 08:02 PM' },
];

export default function ({ navigation }) {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={DATA}
        firstItem={1}
        renderItem={({ item, index }) => <ToDoList item={item} index={index} />}
        sliderWidth={fullWidth}
        itemWidth={fullWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
        style={styles.container}
      />

      <View style={styles.navBar}>
        <Button
          title='Item'
          onPress={() => navigation.navigate('Item')}
        />
        <Button
          title='History'
          onPress={() => navigation.navigate('History')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dcdde1',
  },
  container: {
    flex: 1,
  },
  navBar: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // dot: {
  //   width: 10,
  //   height: 10,
  //   borderRadius: 5,
  //   marginHorizontal: 2,
  //   backgroundColor: 'black',
  // }
});
