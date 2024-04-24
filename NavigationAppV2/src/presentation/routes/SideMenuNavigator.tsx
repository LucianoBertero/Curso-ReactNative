import {
  DrawerContent,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';
import {globalColor} from '../theme/theme';
import {View, useWindowDimensions, Text} from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';
import {BottomTabsNavigator} from './BottomTabsNavigator';

export type RootStackParams = {
  Home: undefined;
  Settings: undefined;
  Products: undefined;
  Product: {id: number; name: string};
};

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimension = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawerContent {...props}></CustomDrawerContent>
      )}
      screenOptions={{
        headerShown: false,
        drawerType: dimension.width >= 758 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColor.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColor.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => <Text>hola</Text>,
        }}
        name="Tabs"
        component={BottomTabsNavigator}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => <Text>hola</Text>,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColor.primary,
          margin: 30,
          borderRadius: 50,
        }}></View>

      <DrawerItemList {...props}></DrawerItemList>
    </DrawerContentScrollView>
  );
};
