
import React from "react";
import { View, TextInput, Button, StyleSheet} from 'react-native';

const AddItem = ({textInput, handleChangeText, handleOnPress}) => { 

    return(
    
        <View style={styles.inputContainer}>
      
        <TextInput 
          style={styles.inputStyle} 
          placeholder='Marca'
          onChangeText={handleChangeText}
          value={textInput}
        />
        <Button  
          onPress={handleOnPress}
          title="Agregar"
        />
        </View>
  
    )
}
const styles = StyleSheet.create({
    inputStyle: {
        borderBottomColor: "#c949e9",
        borderBottomWidth: 1,
        flex: 1,
        marginRight: 30,
        color: "#070c32"
        
      },
      inputContainer: {
      flexDirection: "row",
      backgroundColor: "#c949e9"

      },
})

export default AddItem