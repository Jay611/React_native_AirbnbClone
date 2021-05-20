import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}
      swipeEnabled={false}>
      <Tab.Screen name={'List'} component={SearchResultsScreen} />
      <Tab.Screen name={'Map'} component={SearchResultsMap} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
