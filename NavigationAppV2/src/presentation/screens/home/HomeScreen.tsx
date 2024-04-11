import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {RootStackParams} from '../../routes/StackNavigator';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
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