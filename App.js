import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  // we use a arrow function here to ensure we get the latest state of the currentGoals
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...courseGoals, { key: Math.random().toString(), val: goalTitle }]);
  }

  const deleteGoal = ItemKey => {
    console.log(ItemKey)
    setCourseGoals((currentGoals) => currentGoals.filter(item => item.key !== ItemKey))
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}></Button>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem itemKey={itemData.item.key} title={itemData.item.val} onDelete={deleteGoal} />} />
      {/* The key has to be added to the highest element you are rendering */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
