import React from 'react';
import { ButtonGroup } from 'react-native-elements';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Home = ({ navigation }: { navigation?: any }) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const buttons = ['Hello', 'World', 'Buttons'];
  const theme = useTheme();

  const updateIndex = (index: number) => {
    setSelectedIndex(index);
    switch (index) {
      case 0: {
        navigation.navigate('Add a Expense');
      }
    }
  };

  return (
    <View style={styles.HomeDiv}>
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 100 }}
      />

      <Text>This is the HomeScreen</Text>
      <Text>Acá debería ir el resumen de ingresos, gastos, Equilibrio</Text>
      <Text>
        Agregar botón de + tipo android donde abra o modal pantalla completa o
        directamente la camara.
      </Text>
      <Text>
        Automáticamente guardar la foto con la fecha y hora del día, y de
        inmediato mostrar las siguientes opciones:
      </Text>
      <Text>
        Categoría a agregar el gasto, o multiples categorías, campo para monto
        total y estudiar que otra opción.
      </Text>

      <Button
        title="Go to Modal"
        onPress={() => navigation.navigate('Modal')}
      />
      <Button
        title="Go to New Expense"
        onPress={() => navigation.navigate('Add a Expense')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  HomeDiv: {
    alignItems: 'center',
    minHeight: '100%',
  },
});

export default Home;
