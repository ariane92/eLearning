import React from 'react';
import {View, Text, StatusBar} from 'react-native';

import AppStack from './routes/AppStack';

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <AppStack />
    </>
  );
};

export default App;
