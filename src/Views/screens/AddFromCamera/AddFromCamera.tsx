import React, {useEffect, useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {PermissionsAndroid, View, Text} from 'react-native';
import {OCRTextResponse} from '../commonEntities/Entities';
//@ts-ignore
import RNTextDetector from 'react-native-text-detector';

const AddFromCamera = ({navigation}: {navigation: any}) => {
  const [text, setText] = useState<string>('');
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Pic Expense Manager WRITE Permission',
          message:
            'Pic Expense Manager needs to write the result in your devices ' +
            'so you can take pictures and save the text.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        setHasPermission(true);
      } else {
        console.log('Camera permission denied');
        setHasPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const options = {
    mediaTypes: 'photo',
    quality: 1,
    maxWidth: 600,
    maxHeight: 1200,
  };

  useEffect(() => {
    (async () => {
      if (hasPermission) {
        ImagePicker.launchCamera(options as any, async (response: any) => {
          if (!response.didCancel) {
            const textInfo = await RNTextDetector.detectFromUri(response.uri);
            setText(textInfo.map((item: OCRTextResponse) => item.text));
          }
        });
      } else {
        requestCameraPermission();
      }
    })();

    return () => {
      setText('');
    };
  }, [hasPermission]);

  return text ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>{text}</Text>
    </View>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>
        Nada para mostrar por ahora en launchCamera
      </Text>
    </View>
  );
};

export default AddFromCamera;
