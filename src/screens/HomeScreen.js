import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HI there!</Text>
      <Button
        onPress={() => {
          console.log('!!! Components pressed');
          navigation.navigate('Components');
        }}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => {
          console.log('!!! List pressed');
          navigation.navigate('List');
        }}
        title="Go to List Demo"
      />
      <Button
        onPress={() => {
          console.log('!!! List pressed');
          navigation.navigate('Image');
        }}
        title="Go to image"
      />
      <Button
        onPress={() => {
          navigation.navigate('Counter');
        }}
        title="Go to counter"
      />
      <Button
        onPress={() => {
          navigation.navigate('Color');
        }}
        title="Go to color"
      />
      <Button
        onPress={() => {
          navigation.navigate('Square');
        }}
        title="Go to square"
      />
      <Button
        onPress={() => {
          navigation.navigate('Text');
        }}
        title="Go to text"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
