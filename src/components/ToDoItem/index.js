import React from 'react';
import { TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';

export default function({ item, onCheck }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.checkContainer}>
        <TouchableOpacity style={styles.checkButton} activeOpacity={0.8} onPress={() => onCheck(item.id)}>
          {item.checked && <View style={styles.checked} />}
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Add new to do here..."
        style={styles.input}
        value={item.keyword}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    flexDirection: 'row',
  },
  checkContainer: {
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#fbc531',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fbc531',
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: '500',
    color: '#353b48',
  }
})