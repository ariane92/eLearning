import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const AppTabs = createBottomTabNavigator();

const StudyTabs = () => {
  return (
    <AppTabs.Navigator
      tabBarOptions={{
        style: {elevation: 0, shadowOpacity: 0, height: 64},
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },

        labelStyle: {
          fontSize: 13,
          marginLeft: 16,
        },

        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}>
      <AppTabs.Screen name="TeacherList" component={TeacherList} />
      <AppTabs.Screen name="Favorites" component={Favorites} />
    </AppTabs.Navigator>
  );
};

export default StudyTabs;
