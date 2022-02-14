import React from "react";
import { Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ItemList = ({itemList , handleOnDelete }) =>{ 
    return (
        <FlatList 
        data={itemList}
        renderItem={({item}) => (
          <View  style={styles.item}>
            <Text style={styles.textList}> {item.value} </Text>
            <TouchableOpacity 
              onPress={() => handleOnDelete(item)}
            >
                <Text style={styles.boton}>X</Text>
            </TouchableOpacity>
          </View>

        )}

      keyExtractor={ item => item.id}
      /> 
    )}
    const styles = StyleSheet.create({ 
        item: {
            padding: 20,
            marginVertical: 20,
            borderColor: '#a2532a',
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: "#e2570b",
            borderRadius:10
          },
        textList: {
          color: "#a2532a"
          },
          boton:{
              paddingHorizontal:5,
              marginLeft:10,
              color:"#f30000",
              fontWeight:'700',
              borderColor: '#ff0000',
              borderWidth: 1,
              borderRadius:60
          }
    })
    export default ItemList
    