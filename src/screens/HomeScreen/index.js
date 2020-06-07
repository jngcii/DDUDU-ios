import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ToDoList from '../../components/ToDoList';

const { width: fullWidth } = Dimensions.get('screen');

const TO_DO_ITEMS = [
  { id: 1, keyword: 'first to do', checked: false },
  { id: 2, keyword: 'second to do', checked: false },
  { id: 3, keyword: 'third to do', checked: false },
  { id: 4, keyword: 'fourth to do', checked: false },
];

export default function ({ navigation }) {
  const [todoItems, setTodoItems] = useState(TO_DO_ITEMS);

  const toDoLists = [
    {
      id: 1,
      removable: false,
      todoItems: [] 
    },
    {
      id: 2,
      date: 'September 26 2020, 01:51 PM',
      removable: true,
      todoItems: [todoItems[0], todoItems[1]],
    },
    {
      id: 3,
      date: 'November 01 2020, 12:44 PM',
      removable: true,
      todoItems: [todoItems[2], todoItems[3]],
    },
  ];

  const onCheck = id => {
    const newTodoItems = todoItems.map(item => {
      if (item.id === id) {
        if (item.checked) item.checked = false;
        else item.checked = true;
        return item;
      }
      return item;
    })
    
    setTodoItems(newTodoItems);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Carousel
        data={toDoLists}
        firstItem={1}
        renderItem={({ item, index }) => (
          <ToDoList todoList={item} index={index} onCheck={onCheck} />
        )}
        sliderWidth={fullWidth}
        itemWidth={fullWidth}
        style={styles.container}
        // ref={(c) => { this._carousel = c; }}
        // onSnapToItem={(index) => setActiveSlide(index)}
      />

      <View style={styles.navBar}>
        <Button title="Item" onPress={() => navigation.navigate('Item')} />
        <Button
          title="History"
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
