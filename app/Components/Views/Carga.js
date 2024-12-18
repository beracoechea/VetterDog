import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Link } from 'expo-router';

export default class Carga extends Component {
  render() {
    return (
      <View>
        <Text>Carga</Text>
       
        <Link href="/SeleccionInicio" style={styles.link}>
          Cambio de ventana
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    fontSize: 20,
    color: 'blue',
  },
});
