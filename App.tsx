// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import ItemsScreen from './src/screens/ItemsScreen';
// import OutfitsScreen from './src/screens/OutfitsScreen';

// type TabBarIconProps = {
//   focused: boolean;
//   color: string;
//   size: number;
// };

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
//             let iconName: keyof typeof Ionicons.glyphMap;

//             if (route.name === 'Items') {
//               iconName = focused ? 'shirt' : 'shirt-outline';
//             } else if (route.name === 'Outfits') {
//               iconName = focused ? 'people' : 'people-outline';
//             } else {
//               iconName = 'alert-circle'; // fallback icon
//             }

//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: '#000',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Items" component={ItemsScreen} />
//         <Tab.Screen name="Outfits" component={OutfitsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

import React from 'react';
import AppNavigator from './src/navigation';

export default function App() {
  return <AppNavigator />;
}