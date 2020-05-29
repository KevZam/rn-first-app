import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  // onChangeText passes the entered text automatically so we just have to specify the enteredText
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
      <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
    </View>)
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderWidth: 1
  },
})

export default GoalInput;