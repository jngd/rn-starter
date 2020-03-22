import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + action.payload };
    case 'decrease':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increase', payload: 1 });
        }}></Button>
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrease', payload: 1 });
        }}></Button>
      <Text>Current Count: {count}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
