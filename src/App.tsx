import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Landing from './pages/Landing';

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Landing />
    </>
  );
};

export default App;
