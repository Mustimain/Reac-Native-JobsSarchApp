import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const Input = ({placeholder, onChangeText, value, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isSecure}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: 45,
    padding: 10,
    margin: 10,
    borderColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
  },
  input: {
    backgroundColor: 'transparent',
    height: '100%',
    fontSize: 16,
  },
});

export default Input;
