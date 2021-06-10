import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreateItemModal from '../screens/CreateItemModal/CreateItemModal';
import Layout from '../screens/Layout';

const ModalStack = createStackNavigator();

const ModalStackScreens = () => {
  return (
    <Layout>
      <ModalStack.Navigator mode="modal">
        <ModalStack.Screen name="Modal" component={CreateItemModal} />
      </ModalStack.Navigator>
    </Layout>
  );
};

export default ModalStackScreens;
