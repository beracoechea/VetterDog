import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRouter } from 'expo-router';
import Colors from '../Generic/Colors';

const Carga = () => {
  const router = useRouter();

   useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/SeleccionInicio');
    }, 3500);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {['V', 'e', 't', 't', 'e', 'r'].map((letter, index) => (
          <Text key={index} style={[styles.text, { color: colors[index % colors.length] }]}>
            {letter}
          </Text>
        ))}
      </View>
      <LottieView
        source={require('../../../assets/carga.json')}
        autoPlay
        loop
        style={styles.animation}
        speed={1}
      />
      <View style={styles.textContainer}>
        {['D', 'o', 'g'].map((letter, index) => (
          <Text key={index} style={[styles.text, { color: colors[index % colors.length] }]}>
            {letter}
          </Text>
        ))}
      </View>
    </View>
  );
};

const colors = [Colors.GoldennBatter, Colors.ToastedCaramel, Colors.SpicedWine, Colors.OliveHarves, Colors.CowhineCocoa];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 20, 
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
  animation: {
    width: 200,
    height: 200,
  },
});

export default Carga;
