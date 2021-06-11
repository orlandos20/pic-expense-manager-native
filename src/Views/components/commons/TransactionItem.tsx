import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TransactionItem = ({
  label,
  text,
  bgColor,
}: {
  label: string;
  text: string;
  bgColor?: string;
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.itemsContainer,
          { backgroundColor: bgColor ? bgColor : 'transparent' },
        ]}>
        <View style={styles.iconStyles} />
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ color: 'rgba(183,181,179,0.9)', paddingBottom: 5 }}>
            {label}
          </Text>
          <Text style={styles.textStyles}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  itemsContainer: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingLeft: 20,
    width: '100%',
    height: 100,
    borderRadius: 20,
  },
  iconStyles: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  textStyles: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
