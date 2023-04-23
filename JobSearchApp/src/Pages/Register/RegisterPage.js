import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import styles from '../Register/RegisterPage.style';
import {Formik} from 'formik';

const RegisterPage = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);

  const handleRegister = values => {
    try {
      console.log('Registered Data');
      navigation.navigate('Login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Register</Text>
        </View>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            username: '',
            password: '',
          }}
          onSubmit={handleRegister}>
          {({handleSubmit, handleChange, values}) => (
            <View style={styles.inputContainer}>
              <Input
                onChangeText={handleChange('firstName')}
                value={values.firstName}
                placeholder="Ad"
              />
              <Input
                onChangeText={handleChange('lastName')}
                value={values.lastName}
                placeholder="Soyad"
              />
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

export default RegisterPage;
