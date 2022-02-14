import React from "react";
import { Text, View, Button, Modal, StyleSheet } from 'react-native';

const ModalDelete = ({modalVisible , itemSelected , handleConfirmDelete}) => { 
    return (
        <Modal animationType='slide' visible={modalVisible}>
          <View>
            <View style={styles.modalConteiner}>
              <Text style={styles.modalText}> Deseas eliminar este item del stock? </Text>
              <Text style={styles.modalText}> {itemSelected.value} </Text>
            </View>
            <View>
              <Button
              onPress={handleConfirmDelete}
              title='Confirmar'
              />
            </View>
          </View>
      </Modal>

    )
}

const styles = StyleSheet.create({
  modalConteiner: {
      marginTop:20,
    backgroundColor: "#f7e54a"
  },
  modalText: {
    color: '#000000',
    textAlign:"center"
  }

})
export default ModalDelete