import React, { createRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackRoutes } from '../Routes/Routes';
import {
  StatusBar,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Layout from '../screens/Layout';
import Icon from 'react-native-ionicons';
import ActionSheet from 'react-native-actions-sheet';

const MainStack = createStackNavigator();

const MainStackNav = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  const { colors } = theme;

  const actionSheetRef = createRef<any>();

  const windowWith = Dimensions.get('screen').width;

  return (
    <>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.01)" animated />
      <MainStack.Navigator initialRouteName="Home">
        {MainStackRoutes &&
          MainStackRoutes.length > 0 &&
          MainStackRoutes.map(screen => (
            <MainStack.Screen
              key={screen.name}
              name={screen.name}
              options={{
                ...screen.options,
                headerLeft: () => (
                  <Icon
                    name={screen.name === 'Home' ? 'md-menu' : 'chevron-back'}
                    size={36}
                    color={colors.primary}
                    onPress={() =>
                      screen.name !== 'Home'
                        ? navigation.goBack()
                        : navigation.toggleDrawer()
                    }
                  />
                ),
                headerRight: () =>
                  screen.name !== 'Home' && (
                    <Icon
                      name="md-menu"
                      size={36}
                      color={colors.primary}
                      onPress={() => navigation.toggleDrawer()}
                    />
                  ),
              }}>
              {props => (
                <>
                  <Layout>
                    <screen.component {...props} key={screen.name} />
                  </Layout>
                  <View
                    style={[
                      styles.touchableContainer,
                      { right: windowWith / 2.3 },
                    ]}>
                    <ActionSheet
                      ref={actionSheetRef}
                      headerAlwaysVisible={true}
                      CustomHeaderComponent={<Text>Custom Header</Text>}
                      animated={true}
                      gestureEnabled={true}
                      indicatorColor={'red'}
                      extraScroll={10}
                      bounceOnOpen={true}
                      overlayColor={'blue'}
                      defaultOverlayOpacity={0.6}
                      containerStyle={styles.actionSheetContainer}>
                      <View>
                        <Text>Pruebaaa</Text>
                        <Text>Pruebaaa</Text>
                        <Text>Pruebaaa</Text>
                        <Text>Pruebaaa</Text>
                        <Text>Pruebaaa</Text>

                        <Text>Pruebaaa</Text>
                        <Text>Pruebaaa</Text>
                      </View>
                    </ActionSheet>
                    <TouchableHighlight
                      onPress={() => actionSheetRef.current?.setModalVisible()}
                      style={[
                        styles.actionSheetButton,
                        { backgroundColor: colors.primary },
                      ]}>
                      <Text>+</Text>
                    </TouchableHighlight>
                  </View>
                </>
              )}
            </MainStack.Screen>
          ))}
      </MainStack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    position: 'absolute',
    bottom: 30,
  },
  actionSheetButton: {
    width: 65,
    height: 65,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionSheetContainer: {
    borderRadius: 35,
    padding: 20,
  },
});

export default MainStackNav;
