import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ToDoList from '../ToDoList';

const DATA = [
  { id: 1, date: 'September 24 2020, 11:12 AM' },
  { id: 2, date: 'September 26 2020, 01:51 PM' },
  { id: 3, date: 'November 01 2020, 12:44 PM' },
  { id: 4, date: 'November 16 2020, 09:30 AM' },
  { id: 5, date: 'December 05 2020, 08:02 PM' },
]

export default function() {
  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} initialPage={2} style={styles.wrapper}>
      {DATA.map(item => <ToDoList key={item.id} item={item} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
  },
});
