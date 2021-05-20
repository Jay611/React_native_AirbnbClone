import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useRoute} from '@react-navigation/native';

import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  const route = useRoute();
  const {guests} = route.params;

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}
      swipeEnabled={false}>
      <Tab.Screen name={'List'}>
        {() => <SearchResultsScreen guests={guests} />}
      </Tab.Screen>
      <Tab.Screen name={'Map'}>
        {() => <SearchResultsMap guests={guests} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
