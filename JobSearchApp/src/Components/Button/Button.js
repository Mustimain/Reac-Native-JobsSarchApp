import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = ({text, onPress, loading}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        disabled={loading}
        style={styles.buttonContainer}>
        <Text style={styles.textContainer}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    height: 50,
    margin: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Button;
