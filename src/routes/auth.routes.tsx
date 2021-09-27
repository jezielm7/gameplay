import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import AppointmentDetails from '../screens/AppointmentDetails';

const { Navigator, Screen } = createStackNavigator();

const AuthRouter = () => {
  return (
    <Navigator
      initialRouteName="SignIn"
      headerMode="none"
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={AppointmentDetails} />
    </Navigator>
  );
}

export default AuthRouter;