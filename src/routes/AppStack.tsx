import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStackNavigator = createStackNavigator();
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';

function AppStack() {
  return (
    <NavigationContainer>
      <AppStackNavigator.Navigator screenOptions={{headerShown: false}}>
        <AppStackNavigator.Screen name="Landing" component={Landing} />
        <AppStackNavigator.Screen name="GiveClasses" component={GiveClasses} />
      </AppStackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
