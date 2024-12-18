import {  View, StyleSheet, ImageBackground,ActivityIndicator,} from 'react-native';
import React, { useEffect } from 'react';
import {useRouter } from 'expo-router';
import splash from '../../../assets/splash.png'
import { Colores } from '../Generic/Colors';



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
      <ImageBackground source={splash} resizeMode="cover" style={styles.image}>
        <ActivityIndicator size="large" color={Colores.OliveHarves} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default Carga;
