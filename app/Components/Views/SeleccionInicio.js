import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Icons from '../Generic/Icons';
import Colores from '../Generic/Colors';
import { signIn, signUp } from '../../../DataBase/Auth';


const SeleccionInicio = ({ onSignUp, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Manejo del login
    const handleLogin = async () => {
        try {
            const userData = await signUp(email, password);
            console.log('Registro exitoso:', userData);
            onSignUp(userData);
        } catch (error) {
            alert('Error al registrarse: ' + error.message);
        }
       
    };

    // Manejo del registro
    const handleSignUp = async () => {
        try {
            const userData = await signIn(email, password);
            console.log('Inicio de sesión exitoso:', userData);
            onLogin(userData);
        } catch (error) {
            alert('Error al iniciar sesión: ' + error.message);
        }
    };
    return (
        <ImageBackground
            source={require('../../../assets/Login-BG.png')}
            style={Styles.container}
        >
            <Text style={Styles.titulo}>Welcome</Text>
            <Text style={Styles.subTitle}>Sign in to your account</Text>

            <View style={Styles.contain}>
                {Icons.User({ color: Colores.CowhineCocoa, size: 20, style: { marginRight: 10 } })}
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor={Colores.CowhineCocoa}
                    style={Styles.textInput}
                    placeholder="Username"
                />
            </View>

            <View style={Styles.contain}>
                {Icons.Locked({ color: Colores.CowhineCocoa, size: 20, style: { marginRight: 10 } })}
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholderTextColor={Colores.CowhineCocoa}
                    style={Styles.textInput}
                    placeholder="Password"
                />
            </View>

            <View style={Styles.ButtonContainer}>
                <Text style={Styles.singIn} onPress={handleLogin}>LOG IN</Text>
                <TouchableOpacity style={Styles.IconCircle} onPress={handleSignUp } disabled={!email || !password}>
                    {Icons.ArrowRight({ color: '#fff', size: 20 })}
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={Styles.ButtonCreateAccount} onPress={handleLogin} disabled={!email || !password}>
                <Text style={Styles.createAccount}>Create Account</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

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
    ButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        width: '80%',
        marginLeft:'90%'
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
    },
    ButtonCreateAccount: {
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: Colores.SpicedWine,
        paddingVertical: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
        borderWidth: 1,
        borderColor: Colores.CowhineCocoa,
    },
    createAccount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
});

export default SeleccionInicio;
