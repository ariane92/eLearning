import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const AppTabs = createBottomTabNavigator();

const StudyTabs = () => {
  return (
    <AppTabs.Navigator>
      <AppTabs.Screen name="TeacherList" component={TeacherList} />
      <AppTabs.Screen name="Favorites" component={Favorites} />
    </AppTabs.Navigator>
  );
};

export default StudyTabs;
