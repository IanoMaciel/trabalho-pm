import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ItemMunicipio } from '../component/ItemMunicipio';
import { api } from '../service/api';
import { Estado } from './Home';

interface Params
{
    estado: Estado;
}

export interface Municipio 
{
    id: number;
    nome: string;

}

export function Municipio()
{
    const route = useRoute();
    const {estado} = route.params as Params;
    const [municipios, setMunicipios] = useState<Municipio[]>([]);
    const navigation = useNavigation();
    
    async function carregaMunicipios()
    {
        const response = await api.get<Municipio[]>(`/${estado.id}/municipios?orderBy=nome`);
        setMunicipios(response.data);
    }

    useEffect(() => {
        carregaMunicipios();
        navigation.setOptions({title: estado.nome});
    },[])

    return(
        <View style={styles.container}>
            <FlatList<Municipio>
                style={{flex: 1}}  
                showsVerticalScrollIndicator={false}
                data={municipios}
                keyExtractor={(municipio) => String(municipio.id)}
                renderItem={({item}) => (
                <ItemMunicipio item={item} />)}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 20,
      //alignItems: 'center',
      //justifyContent: 'center',
    }
});