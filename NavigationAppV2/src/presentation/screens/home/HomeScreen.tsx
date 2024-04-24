import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {RootStackParams} from '../../routes/StackNavigator';
import {useEffect} from 'react';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Products"></PrimaryButton>

      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"></PrimaryButton>
    </View>
  );
};

export default HomeScreen;
