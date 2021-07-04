import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

const StackRouter = () => {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}

export default StackRouter;