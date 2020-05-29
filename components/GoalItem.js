import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
  return (
    // Touchable makes it easy to add touch events to the component. You can use this to make your own touchable components 
    // like custom buttons, ect. 
    <TouchableOpacity onPress={() => props.onDelete(props.itemKey)} activeOpacity={0.8}>
      <View style={styles.listItem}>
        <Text >{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: 'black',
    borderWidth: 1

  }
})

export default GoalItem;