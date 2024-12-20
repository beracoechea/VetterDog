import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Fontisto, Entypo } from '@expo/vector-icons';
import Colores from '../Generic/Colors';

export default function SeleccionInicio() {
    return (
        <ImageBackground
            source={require('../../../assets/Login-BG.png')}
            style={Styles.container}
        >
            <Text style={Styles.titulo}>Welcome </Text>
            <Text style={Styles.subTitle}>Sign in to your account </Text>

            <View style={Styles.contain}>
                <Fontisto name="person" color={Colores.CowhineCocoa} size={20} style={{ marginRight: 10 }} />
                <TextInput
                    placeholderTextColor={Colores.CowhineCocoa}
                    style={Styles.textInput}
                    placeholder="Username"
                />
            </View>

            <View style={Styles.contain}>
                <Fontisto name="locked" color={Colores.CowhineCocoa} size={20} style={{ marginRight: 10 }} />
                <TextInput
                    secureTextEntry={true}
                    placeholderTextColor={Colores.CowhineCocoa}
                    style={Styles.textInput}
                    placeholder="Password"
                />
            </View>

            <TouchableOpacity>
                <Text style={Styles.Forgot}>Forgot your password? </Text>
            </TouchableOpacity>

            <View style={Styles.ButtonContainer}>
                <Text style={Styles.singIn}>LOG IN</Text>
                <TouchableOpacity style={Styles.IconCircle}>
                    <Entypo name="arrow-right" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={Styles.ButtonCreateAccount}>
                <Text style={Styles.createAccount}>CREATE ACCOUNT</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </ImageBackground>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 60,
        fontWeight: 'bold',
        color: Colores.CowhineCocoa,
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 20,
        color: Colores.GoldennBatter,
        marginBottom: 20,
    },
    contain: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colores.GoldennBatter,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '80%',
        backgroundColor: '#fff',
    },
    textInput: {
        flex: 1,
        height: 40,
    },
    Forgot: {
        textAlign: 'end',
        marginTop: 10,
        fontSize: 12,
        color: Colores.ToastedCaramel,
        width: '100%',
    },
    ButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        width: '80%',
        marginLeft: '100%',
    },
    singIn: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colores.OliveHarves,
        margin: 8,
    },
    IconCircle: {
        width: 60,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colores.OliveHarves,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
    },
    ButtonCreateAccount: {
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: Colores.SpicedWine,
        padding: 10,
    },
    createAccount: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
});
