import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from 'react-native-button';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#333',
  },
  doneText: {
    textDecorationLine: 'line-through'
  },
  button: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#008080',
    marginLeft: 5,
    marginRight: 5,
    color: 'white'
  },
  deleteButton: {
    backgroundColor: '#800000',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

const TodoItem = (props) => {
  const {
    text,
    onDone,
    onDelete,
    done,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Button
          style={styles.button}
          onPress={onDone}
        >
          {done? "Undo" : "Done"}
        </Button>
        <Text style={[styles.text, done && styles.doneText]}>{text}</Text>
      </View>
      <Button
        style={[styles.button, styles.deleteButton]}
        onPress={onDelete}
      >
        Delete
      </Button>
    </View>
  );
}

export default TodoItem;
