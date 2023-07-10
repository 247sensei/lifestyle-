import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import FirstCard from './components/FirstCard';
import WorkoutCard from './components/WorkoutCard';

const Tab = createMaterialBottomTabNavigator();

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'centre', alignItems: 'centre'}}>
      <Text>Feed!</Text>
      <FirstCard />
      <WorkoutCard />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'centre', alignItems: 'centre'}}>
      <Text>Fitness!</Text>
    </View>
  );
}

function MyTabs() {
  return (
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        labelStyle={{ frontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          />
           <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Fitness',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="chart-bar" color={color} size={26} />
            ),
          }}
          />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );  
}







