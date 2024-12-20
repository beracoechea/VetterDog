import { ExpoConfig, ConfigContext } from "expo/config";
import * as dotenv from 'dotenv';
import { supabase } from "./DataBase/supabase";

dotenv.config()

export default ({config}: ConfigContext): ExpoConfig =>{
    return{
        ...config,
        slug:'supabook',
        name:'VetterDog',
        extra: {
            ...config.extra,
            supabaseUrl:process.env.SUPABASE_URL,
            supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
        }
    }
}