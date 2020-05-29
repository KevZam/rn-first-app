import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // onChangeText passes the entered text automatically so we just have to specify the enteredText
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  // we use a arrow function here to ensure we get the latest state of the currentGoals
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
  }

  return (
    // A view is the equivalent of a div

    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal, index) => <Text key={index}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderWidth: 1
  }

});
