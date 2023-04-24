import {React, Dimensions} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import styles from './Button.style';

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

export default Button;
