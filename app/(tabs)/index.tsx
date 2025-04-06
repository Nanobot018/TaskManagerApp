// Import necessary dependencies from React and React Native
import React, { useState } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
// Import UI components from React Native Paper (Material Design components)
import { DefaultTheme, PaperProvider, TextInput, Button, Card, Text, IconButton } from 'react-native-paper';

// Create a custom light theme
const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',  // Primary color for buttons and active elements
    background: '#ffffff', // White background
    surface: '#ffffff',   // Card background
    text: '#000000',      // Black text for contrast
  },
};

// Define the structure of a task using TypeScript interface
interface Task {
  id: string;      // Unique identifier for each task
  text: string;    // The content of the task
  completed: boolean; // Whether the task is completed or not
}

// Main component for the Task Manager app
export default function HomeScreen() {
  // State management using React hooks
  const [tasks, setTasks] = useState<Task[]>([]); // Array to store all tasks
  const [taskInput, setTaskInput] = useState(''); // State for the input field

  // Function to add a new task
  const addTask = () => {
    if (taskInput.trim()) { // Only add task if input is not empty or just whitespace
      setTasks([...tasks, {
        id: Date.now().toString(), // Create unique ID using timestamp
        text: taskInput,
        completed: false
      }]);
      setTaskInput(''); // Clear input field after adding task
    }
  };

  // Function to toggle task completion status
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map(task =>
        task.id === id 
          ? { ...task, completed: !task.completed } // Toggle completion status
          : task // Keep other tasks unchanged
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id)); // Remove task with matching ID
  };

  // Component to render individual task items
  const renderItem = ({ item }: { item: Task }) => (
    <Card style={styles.taskCard}>
      <Card.Content>
        <TouchableOpacity onPress={() => toggleTask(item.id)}>
          <Text style={[
            styles.taskText,
            item.completed && styles.completedTask // Apply strikethrough style if completed
          ]}>
            {item.text}
          </Text>
        </TouchableOpacity>
        <IconButton
          icon="trash-can"
          onPress={() => deleteTask(item.id)}
          style={styles.deleteButton}
          size={24}
        />
      </Card.Content>
    </Card>
  );

  // Main render function
  return (
    <PaperProvider theme={lightTheme}>
      <View style={styles.container}>
        {/* App title */}
        <Text style={styles.title} variant="headlineMedium">Task Manager</Text>

        {/* Task input field */}
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={taskInput}
          onChangeText={setTaskInput}
          mode="outlined"
          left={<TextInput.Icon icon="plus" />}
        />

        {/* Add task button */}
        <Button
          mode="contained"
          onPress={addTask}
          style={styles.addButton}
          icon="plus"
        >
          Add Task
        </Button>

        {/* List of tasks */}
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </PaperProvider>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,           // Take up all available space
    padding: 16,       // Add padding around the content
    backgroundColor: '#ffffff', // White background
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#000000', // Black text for contrast
  },
  input: {
    marginBottom: 16, // Space between input and button
  },
  addButton: {
    marginBottom: 16, // Space between button and task list
  },
  listContainer: {
    flexGrow: 1,     // Allow list to grow and scroll
  },
  taskCard: {
    marginBottom: 8, // Space between task cards
    elevation: 2,    // Add shadow on Android
  },
  taskText: {
    fontSize: 16,
    flex: 1,        // Take up available space in row
    color: '#000000', // Black text
  },
  completedTask: {
    textDecorationLine: 'line-through', // Strike through completed tasks
    color: '#888',                      // Dim completed tasks
  },
  deleteButton: {
    marginLeft: 'auto', // Push delete button to the right
  },
});
