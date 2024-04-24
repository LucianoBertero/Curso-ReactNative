import React from 'react';
import {Text, View} from 'react-native';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top,
      }}>
      <Text style={{marginBottom: 10}}>Profile Screen</Text>
      <PrimaryButton
        label="Abrir menu"
        onPress={() =>
          navigation.dispatch(DrawerActions.toggleDrawer)
        }></PrimaryButton>
    </View>
  );
};

export default ProfileScreen;
