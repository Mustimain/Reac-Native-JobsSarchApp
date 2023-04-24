import React from 'react';
import {} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobsPage from '../Jobs';
import JobDetail from '../JobDetail';

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
      <Stack.Screen
        options={{
          title: 'Job Detail',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}
        name="JobDetail"
        component={JobDetail}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
