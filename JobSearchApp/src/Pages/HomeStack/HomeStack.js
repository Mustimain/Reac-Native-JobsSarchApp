import React from 'react';
import {} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobsPage from '../Jobs';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Jobs">
      <Stack.Screen
        options={{
          title: 'Jobs',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}
        name="Jobs"
        component={JobsPage}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
