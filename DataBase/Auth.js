import { supabase } from './supabase';

// Función para iniciar sesión con email y contraseña
export const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        console.error('Error al iniciar sesión:', error.message);
        throw new Error(error.message);
    }

    return data;
};

// Función para registrar un nuevo usuario
export const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        console.error('Error al registrarse:', error.message);
        throw new Error(error.message);
    }

    return data;
};
