import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Text } from 'react-native-elements';
import ToDoItem from '../ToDoItem';

function Title({ title }) {
  return <Text style={styles.title}>{ title }</Text>;
}

export default function({ todoList, onCheck }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Header
          centerComponent={<Title title={todoList.removable ? todoList.date : "Create new todo-list!"} />}
          containerStyle={styles.header}
        >
        </Header>

        <View>
          {todoList.todoItems.map((item, index) => <ToDoItem key={index} item={item} onCheck={onCheck} />)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 15,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: '#192a56',
  },
  header: {
    backgroundColor: 'transparent',
  }
});
