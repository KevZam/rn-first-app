import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  return (
    // A view is the equivalent of a div

    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: "center" }}>
        <TextInput placeholder="Course Goal" style={{ width: '80%', borderBottomColor: 'black', borderWidth: 1 }} />
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({


});
