import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text, TouchableOpacityProps } from 'react-native';
import { Municipio } from '../view/Municipio';

interface ItemMunicipioProps extends TouchableOpacityProps
{
  item: Municipio;
}

export function ItemMunicipio({item, ...rest}: ItemMunicipioProps)
{
    return (
        <View>
            <TouchableOpacity style={styles.itemEstados} {...rest}>
                <View style={styles.borderSigla}>
                    <Text style={styles.ufSigla}>{item.nome.substring(0,1)}</Text>
                </View>
                <Text style={styles.nameEstado}>{item.nome}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    itemEstados: {
      paddingVertical: 10,
      marginTop: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      borderRadius: 10
    },
    borderSigla: {
      width: 60,
      height: 60,
      backgroundColor: '#54b7cc',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10
    },
    ufSigla: {
      fontSize: 20,
      color: 'white'
    },
    nameEstado: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
      marginLeft: 10,
      alignSelf: 'center'
    }
  });