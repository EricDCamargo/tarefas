import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import Task from './src/task'

export default function App() {
  const [task, setTask] = useState('')
  const [list, setList] = useState([
    { key: '1', item: 'Comprar ps4' },
    { key: '2', item: 'Comprar ps5' }
  ])

  function handleAdd() {
    alert(task)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite sua tarefa.."
          style={styles.input}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <FontAwesome name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        keyExtractor={item => item.key}
        renderItem={({ item }) => <Task data={item} />}
        style={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop: '28'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    marginTop: '8%',
    paddingStart: '5%',
    marginBottom: 12
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22
  },
  input: {
    width: '75%',
    backgroundColor: '#FBFBFB',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8
  },
  buttonAdd: {
    width: '15%',
    height: 44,
    backgroundColor: '#73F7FF',
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  list: {
    flex: 1,
    backgroundColor: '#fff',
    paddingStart: '4%',
    paddingEnd: '4%'
  }
})
