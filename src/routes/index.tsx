import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRouter from './auth.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRouter />
    </NavigationContainer>
  );
}

export default Routes;