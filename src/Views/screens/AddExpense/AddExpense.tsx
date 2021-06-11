import React, { useState } from 'react';
import {
  PermissionsAndroid,
  View,
  Text,
  TextInput,
  StatusBar,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import TransactionItem from '../../components/commons/TransactionItem';
import * as ImagePicker from 'react-native-image-picker';
import { OCRTextResponse } from '../commonEntities/Entities';
//@ts-ignore
import RNTextDetector from 'react-native-text-detector';

const AddExpense = ({ navigation }: { navigation: any }) => {
  const [text, setText] = useState<string>('');
  const [payeeInputFocused, setPayeeInputFocused] = useState<boolean>(false);
  const [payeeText, setPayeeText] = useState<string>('');
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  const statusBarHeight = StatusBar.currentHeight;

  const windowWith = useWindowDimensions().width;

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
    maxWidth: 600,
    maxHeight: 1200,
    quality: 1,
  };

  const selectPhoto = (): void => {
    ImagePicker.launchImageLibrary(options as any, async (response: any) => {
      if (!response.didCancel) {
        const textInfo = await RNTextDetector.detectFromUri(response.uri);
        setText(textInfo.map((item: OCRTextResponse) => item.text));
      }
    });
  };

  const takePhoto = (): void => {
    ImagePicker.launchCamera(options as any, async (response: any) => {
      if (!response.didCancel) {
        const textInfo = await RNTextDetector.detectFromUri(response.uri);
        setText(textInfo.map((item: OCRTextResponse) => item.text));
      }
    });
  };

  const labelStyle = {
    position: 'absolute',
    left: 0,
    top: !payeeInputFocused && payeeText === '' ? 9 : -3,
    fontSize: !payeeInputFocused && payeeText === '' ? 16 : 14,
    color:
      !payeeInputFocused && payeeText === ''
        ? 'rgba(214,210,210,0.7)'
        : 'rgba(183,181,179,0.9)',
  };

  return text ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>{text}</Text>
    </View>
  ) : (
    <View style={{ flex: 1, marginTop: 10 }}>
      <TransactionItem label={'Transaction type'} text={'Expense'} />
      <TransactionItem label={'Payee'} text={payeeText} bgColor={'#fff'} />

      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View>
          <Text style={labelStyle}>Payee name</Text>
          <TextInput
            inlineImageLeft="search_icon" // If defined, the provided image resource will be rendered on the left. The image resource must be inside /android/app/src/main/res/drawable and referenced like
            onFocus={() => setPayeeInputFocused(true)}
            onBlur={() => setPayeeInputFocused(false)}
            onChangeText={inputText => setPayeeText(inputText)}
            style={styles.payeeInput}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardAvoiding: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  payeeInput: {
    height: 40,
    borderColor: 'rgba(214,210,210,0.7)',
    borderBottomWidth: 1,
    marginBottom: 40,
    paddingBottom: 0,
    color: 'black',
  },
  transactionLabel: {
    color: 'rgba(183,181,179,0.9)',
    paddingBottom: 5,
  },
  transactionName: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default AddExpense;
