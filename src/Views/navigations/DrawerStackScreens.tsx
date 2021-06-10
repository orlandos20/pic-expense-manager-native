import React from 'react';
import {useTheme} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {DrawerStackRoutes} from '../Routes/Routes';
import MainStackNav from './MainStackScreen';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import Layout from '../screens/Layout';
import Icon from 'react-native-ionicons';

const DrawerStack = createDrawerNavigator();

const CustomDrawerContent = (props?: any) => {
  const theme = useTheme();
  const {colors} = theme;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.ImgContainer}>
        <Text>Aquí iría la imagen</Text>
      </View>

      {DrawerStackRoutes?.length > 0 &&
        DrawerStackRoutes.map(screen => (
          <DrawerItem
            label={() => (
              <Text style={{color: colors.text}}>{screen?.name}</Text>
            )}
            onPress={() => {
              // Navigate using the `navigation` prop that you received
              props?.navigation.navigate(`${screen?.name}`);
            }}
            key={screen?.name}
          />
        ))}
    </DrawerContentScrollView>
  );
};

const DrawerStackScreens = ({toggleDrawer}: {toggleDrawer: any}) => {
  const theme = useTheme();
  const {colors} = theme;

  return (
    <>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.01)" animated />
      <DrawerStack.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerLeft: () => {
            return (
              <Icon
                style={{marginLeft: 10}}
                name="md-menu"
                size={36}
                color={colors.primary}
                onPress={toggleDrawer}
              />
            );
          },
        }}
        drawerContentOptions={{
          activeTintColor: colors.primary,
          itemStyle: {marginVertical: 10},
        }}>
        <DrawerStack.Screen name="Home" component={MainStackNav} />

        {DrawerStackRoutes &&
          DrawerStackRoutes.length > 0 &&
          DrawerStackRoutes.map(screen => (
            <DrawerStack.Screen
              name={screen.name}
              key={screen.name}
              options={({navigation}) => ({
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
                headerRight: () => (
                  <Icon
                    name="md-menu"
                    size={36}
                    color={colors.primary}
                    onPress={toggleDrawer}
                  />
                ),
              })}>
              {props => (
                <Layout>
                  <screen.component {...props} />
                </Layout>
              )}
            </DrawerStack.Screen>
          ))}
      </DrawerStack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  ImgContainer: {
    marginTop: 25,
    marginBottom: 25,
    paddingTop: 30,
    paddingBottom: 30,
  },
  ImgContainerText: {
    paddingLeft: 16,
    color: '#fff',
  },
});

export default DrawerStackScreens;
