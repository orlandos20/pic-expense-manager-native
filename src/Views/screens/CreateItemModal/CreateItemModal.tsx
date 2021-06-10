import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';

const CreateItemModal = ({
  route,
  navigation,
}: {
  route?: any;
  navigation?: any;
}) => {
  const theme = useTheme();
  const {colors} = theme;

  const {img} = route.params;

  return (
    <View style={styles.ModalDiv}>
      <View style={styles.ImgView}>
        <Image style={styles.Img} source={{uri: img.photo.uri}} />
      </View>
      <Text style={{fontSize: 30, color: colors.text}}>This is a modal!</Text>
      <Button
        onPress={() => {
          navigation.navigate('Add a Expense', {reTake: true});
        }}
        title="Dismiss"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ModalDiv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    minWidth: '100%',
  },
  ImgView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    margin: '0 auto',
  },
  Img: {
    width: '100%',
    height: '100%',
  },
});

export default CreateItemModal;
