import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Pressable, Text} from 'react-native';

const HambuerguerManu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text> Menu</Text>
        </Pressable>;
      },
    });
  }, []);

  return <></>;
};

export default HambuerguerManu;
