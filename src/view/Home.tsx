import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ItemEstado } from '../component/ItemEstado';
import { api } from '../service/api';


export interface Estado {
  id: number;
  nome: string;
  sigla: string;
  regiao: string;
}

export function Home()
{
  const [estados, setEstado] = useState<Estado[]>([]);
  const navigation = useNavigation();

  async function carregaEstados()
  {
    const response = await api.get('?orderBy=nome');
    setEstado(response.data);
  }

  function handleToMunicipio(item: Estado)
  {
    navigation.navigate('Municipio', {estado: item});
  }

  useEffect(() => {
    carregaEstados();
  },[])

  return (
    <View style={styles.container}>
      <FlatList<Estado>
        style={{flex: 1}}  
        showsVerticalScrollIndicator={false}
        data={estados}
        keyExtractor={(estado) => String(estado.id)}
        renderItem={({item}) => (
          <ItemEstado item={item} onPress={() => handleToMunicipio(item)}/>)}
      ></FlatList>
    </View>
  );
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

