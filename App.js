import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

// Main App Component
export default function App() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to hold the current task input
  const [taskInput, setTaskInput] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: taskInput, completed: false }]);
      setTaskInput(''); // Clear the input field
    }
  };

  // Function to toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Render each task item
  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => toggleTask(item.id)}>
        <Text style={[styles.taskText, item.completed && styles.completedTask]}>{item.text}</Text>
      </TouchableOpacity>
      <Button title="Delete" onPress={() => deleteTask(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={taskInput}
        onChangeText={setTaskInput}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});
