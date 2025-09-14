// src/navigation/index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SavedScreen from '../screens/SavedScreen';
import ItemsScreen from '../screens/ItemsScreen';
import { COLORS } from '../constants/colors';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Saved') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            } else if (route.name === 'Items') {
              iconName = focused ? 'shirt' : 'shirt-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.black,
          tabBarInactiveTintColor: COLORS.gray,
        })}
      >
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Items" component={ItemsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;