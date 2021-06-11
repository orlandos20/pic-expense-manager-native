import React, { useEffect, createRef } from 'react';
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
                      indicatorColor={'#000'}
                      bounceOnOpen={true}
                      overlayColor={'blue'}
                      defaultOverlayOpacity={0.6}
                      drawUnderStatusBar={true}
                      closeOnPressBack={true}
                      keyboardShouldPersistTaps={'handled'}
                      bottomOffset={20}
                      containerStyle={styles.actionSheetContainer}>
                      <View style={{ minHeight: 400 }}>
                        <View style={styles.actionSheetCardContainer}>
                          <TouchableHighlight
                            style={styles.actionSheetCard}
                            onPress={() => navigation.navigate('Add Income')}>
                            <Text style={styles.cardText}>Income</Text>
                          </TouchableHighlight>
                          <TouchableHighlight
                            style={styles.actionSheetCard}
                            onPress={() => navigation.navigate('Add Expense')}>
                            <Text style={styles.cardText}>Expense</Text>
                          </TouchableHighlight>
                        </View>
                      </View>

                      <Text>Pruebaaa</Text>
                      <Text>Pruebaaa</Text>
                      <Text>Pruebaaa</Text>
                      <Text>Pruebaaa</Text>
                      <Text>Pruebaaa</Text>

                      <Text>Pruebaaa</Text>
                      <Text>Pruebaaa</Text>
                      {/* <Layout>
                        <screen.component {...props} key={screen.name} />
                      </Layout> */}
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
    minHeight: Dimensions.get('screen').height,
    borderRadius: 35,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  actionSheetCardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionSheetCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: 200,
    height: 250,
    borderRadius: 20,
  },
  cardText: {
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainStackNav;
