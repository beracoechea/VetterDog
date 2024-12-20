import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';

export default function pruebaDB() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const { data, error } = await supabase.from('Prueba').select('*')

            if (error) {
                console.log(error)
            } else {
                setUsers(data)
            }
        };
        fetchUsers();
    }, [])

    return(
        <View style={Styles.container}>
            <Text>Users</Text>
            <View style={Styles.list}>
                    <FlatList
                        data={users}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <Text>{item.content}</Text>}
                    />
            </View>
            
        </View>
    );
}

const Styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    list: {
        color: '#000',
    }
})