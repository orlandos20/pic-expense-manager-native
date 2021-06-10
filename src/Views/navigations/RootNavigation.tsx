import * as React from 'react';
import {DrawerActions} from '@react-navigation/native';

export const navigationRef = React.createRef<any>();

export const isReadyRef = React.createRef<{current: boolean}>();

export function navigate({name, params}: {name: string; params: any}) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function toggleDrawer() {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}
