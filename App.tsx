import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './src/routes';
import {AuthProvider} from './src/Contexts/AuthContexts';
import {DropdownAlertProvider} from './src/Contexts/DropdownAlertContext';

const App = () => {
  return (
    <DropdownAlertProvider>
      <AuthProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </DropdownAlertProvider>
  );
};

export default App;
