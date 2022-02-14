import { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddItem from './component/AddItem';
import ModalDelete from './component/Modal.js';
import ItemList from './component/ItemList';

export default function App() {
  const [textInput , setTextInput] = useState('');
  const [itemList , setItemList] = useState([]);
  const [itemSelected , setItemSelected] = useState({});
  const [modalVisible , setModalVisible] = useState(false);

  const handleChangeText = (text) => {
    setTextInput(text)
  }

  const handleOnPress = () => {
    setTextInput('')
    setItemList([
      ...itemList, {
        value: textInput,
        id: Math.random().toString(),
      },
    ])
  }

  const handleOnDelete = (item) => {
    setModalVisible(true)
    setItemSelected(item)
  }

  const handleConfirmDelete = () => {
    const {id} = itemSelected
    setItemList(itemList.filter(item => item.id !== id))
    setModalVisible(false)
    setItemSelected({})
  }


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}> Tu Stock </Text>
      </View>
      < ItemList 
     itemList = {itemList}
     handleOnDelete = {handleOnDelete}
     />
       < ModalDelete
      modalVisible = {modalVisible}
      itemSelected = {itemSelected}
      handleConfirmDelete = {handleConfirmDelete}
      />
      <View>
        <Text style={styles.texto}>Agregá un nuevo item a tu stock</Text>
      </View>
      <AddItem
        textInput={textInput}
        handleChangeText={handleChangeText}
        handleOnPress={handleOnPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    color: "#000000",
    marginTop:60,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 20,
    marginBottom:20,
    fontWeight: 'bold',
    color: "#000000"
  },
});
