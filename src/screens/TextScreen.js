import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter password:</Text>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />

      {password.length > 5 ? <Text>{password}</Text> : <Text>At least 5 characters</Text>}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
