import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackRoutes} from '../Routes/Routes';
import {StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Layout from '../screens/Layout';
import Icon from 'react-native-ionicons';

const MainStack = createStackNavigator();

const MainStackNav = ({navigation}: {navigation: any}) => {
  const theme = useTheme();
  const {colors} = theme;

  return (
    <>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.01)" animated />
      <MainStack.Navigator initialRouteName="Home">
        {/* <MainStack.Screen
            name="Drawer"
            component={DrawerStackScreens}
            options={{ headerShown: false }}
          /> */}

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
                // headerStyle: {
                //   backgroundColor: "#f4511e"
                // }
              }}>
              {props => (
                <Layout>
                  <screen.component {...props} key={screen.name} />
                </Layout>
              )}
            </MainStack.Screen>
          ))}
      </MainStack.Navigator>
    </>
  );
};

export default MainStackNav;
