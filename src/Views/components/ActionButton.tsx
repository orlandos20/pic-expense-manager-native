import React from 'react';
import { FloatingAction } from 'react-native-floating-action';
import Icon from 'react-native-ionicons';

import { useTheme } from '@react-navigation/native';
import { DrawerStackRoutes } from '../Routes/Routes';

const ActionButton = ({
  navigation,
  actionSheetRef,
}: {
  navigation: any;
  actionSheetRef: any;
}) => {
  const theme = useTheme();
  const { colors } = theme;

  const ActionButonMenu = DrawerStackRoutes.map(item => item.name);

  const actions = ActionButonMenu.map((name, index) => {
    return {
      text: name,
      textColor: colors.text,
      textBackground: 'rgba(0,0,0,0.01)',
      icon: <Icon name="md-menu" size={36} color={colors.text} />,
      name: name,
      position: index,
    };
  });

  return (
    <FloatingAction
      actions={actions}
      color={colors.primary}
      overlayColor="rgba(0, 0, 0, 0.01)"
      onPressItem={name => {
        actionSheetRef.current?.setModalVisible();
        // navigation.navigate(name);
      }}
    />
  );
};

export default ActionButton;
