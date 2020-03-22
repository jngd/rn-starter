import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = <Text>Hi there</Text>;

  return (
    <View>
      <Text style={styles.text}>This is a component</Text>
      {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
  },
});

export default ComponentsScreen;
