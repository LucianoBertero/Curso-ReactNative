import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProductsScreen from '../screens/prductcs/ProductsScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import ProductScreen from '../screens/prductcs/ProductScreen';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export type RootStackParams = {
  Home: undefined;
  Settings: undefined;
  Products: undefined;
  Product: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      headerShow: false,
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen options={{}} name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};
