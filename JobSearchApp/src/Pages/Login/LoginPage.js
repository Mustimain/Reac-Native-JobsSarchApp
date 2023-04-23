import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './LoginPage.style';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import {Formik} from 'formik';
import axios from 'axios';

const LoginPage = ({navigation}) => {
  const [loading, setLoading] = React.useState(true);

  const handleLogin = values => {
    navigation.navigate('HomeStack');
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Login </Text>
        </View>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={handleLogin}>
          {({handleSubmit, handleChange, values}) => (
            <View style={styles.inputContainer}>
              <Input
                onChangeText={handleChange('username')}
                value={values.username}
                placeholder="Kullanıcı Adı"
              />
              <Input
                onChangeText={handleChange('password')}
                value={values.password}
                isSecure={true}
                placeholder="Şifre"
              />
              <Button text="Gönder" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;

const users = {
  username: 'musti',
  password: 'ceylo',
};
