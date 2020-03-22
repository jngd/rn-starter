import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 10 },
    { name: 'Friend #2', age: 20 },
    { name: 'Friend #3', age: 30 },
    { name: 'Friend #4', age: 40 },
    { name: 'Friend #5', age: 50 },
    { name: 'Friend #6', age: 60 },
  ];

  return (
    <FlatList
      keyExtractor={({ name }) => name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({ textStyle: { marginVertical: 50 } });

export default ListScreen;
