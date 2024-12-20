import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import Colores from '../Generic/Colors';


export default function SeleccionInicio(){
    return(
        <View style={Styles.container}>
            <Image style={{width: 150, height: 150}} source={require('../../../assets/icon.png')}/>
            <Text style={Styles.titulo}>Welcome</Text>
            <Text style={Styles.subTitle}>Sign in to your account</Text>
            <TextInput
                placeholderTextColor={Colores.CowhineCocoa}
                style={Styles.textInput}
                placeholder="e-mail"
            />
            <TextInput
                secureTextEntry={true}
                placeholderTextColor={Colores.CowhineCocoa}
                style={Styles.textInput}
                placeholder="password"
            />
            <TouchableOpacity>
                <Text style={Styles.Forgot}>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.ButtonSignIn}>
                <Text style={Styles.singIn}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={Styles.NoAccount}>Don't have an account?</Text>
            </TouchableOpacity>
            <View style={Styles.line}></View>
            <TouchableOpacity style={Styles.ButtonGoogle}>
                <Fontisto name='google' color={'#000'} size={20} padding={10}/>
                <Text style={Styles.singInGoogle}>SIGN IN WITH GOOGLE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.ButtonFacebook}>
                <Fontisto name='facebook' color={'#000'} size={20} padding={10}/>
                <Text style={Styles.singInFacebook}>SIGN IN WITH FACEBOOK</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const Styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
},
titulo: {
    fontSize: 80,
    fontWeight: 'bold',
    color: Colores.CowhineCocoa,
},
subTitle: {
    fontSize: 20,
    color: Colores.GoldennBatter,
},
textInput: {
    padding: 10,
    paddingStart: 30,
    color: '#000',
    width: '80%',
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
},
Forgot: {
    marginTop: 20,
    fontSize: 10,
    color: 'gray',
},
NoAccount: {
    marginTop: 20,
    fontSize: 10,
    color: 'gray',
},
ButtonSignIn: {
    marginTop: 30,
    width: '50%',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 5,
},
singIn: {
    fontSize: 20,
    fontWeight: 'bold'
},
line: {
    marginTop: 10,
    height: 1,
    width: '80%',
    backgroundColor: '#000',
    marginVertical: "10px",
},
ButtonGoogle: {
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row'
},
singInGoogle: {
    fontSize: 15,
    fontWeight: 'bold'
},
ButtonFacebook: {
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row'
},
singInFacebook: {
    fontSize: 15,
    fontWeight: 'bold'
},
});