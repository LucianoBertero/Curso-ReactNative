import Icon from 'react-native-vector-icons/Ionicons';

import HambuerguerManu from '../../components/shared/HambuerguerManu';

import {Text, View} from 'react-native';

const Tabs1Screen = () => {
  return (
    <View>
      <HambuerguerManu></HambuerguerManu>
      <Text>
        <Icon name="rocket-outline" size={30} />;
      </Text>
    </View>
  );
};

export default Tabs1Screen;
