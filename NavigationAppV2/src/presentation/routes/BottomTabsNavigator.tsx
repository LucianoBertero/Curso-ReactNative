import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import Tabs1Screen from '../screens/tabs/Tabs1Screen';
import Tabs3Screen from '../screens/tabs/Tabs3Screen';
import Tabs2Screen from '../screens/tabs/Tabs2Screen';
import {globalColor, globalStyles} from '../theme/theme';
import {Text} from 'react-native';
import {TopTabNavigator} from './TopTabsNavigator';

export const BottomTabsNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColor.backgorund,
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'tansparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tabs1  ',
          tabBarIcon: ({color}) => <Text style={{color}}>Tabs1</Text>,
        }}
        component={Tabs1Screen}></Tab.Screen>
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tabs2  ',
          tabBarIcon: ({color}) => <Text style={{color}}>Tabs2</Text>,
        }}
        component={TopTabNavigator}></Tab.Screen>
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tabs3  ',
          tabBarIcon: ({color}) => <Text style={{color}}>Tabs3</Text>,
        }}
        component={Tabs3Screen}></Tab.Screen>
    </Tab.Navigator>
  );
};
