import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  useColorScheme,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AddTodo from "./AddTodo";
import TodoContainer from "./TodoContainer";
import Msg from "./Msg";

const Home = () => {
  const [todos, setTodos] = useState([
    {
      title: "Learn React Native",
      desc: "This is my application",
      key: Math.random().toString(),
      reminderTime: new Date(),
      date: new Date().toLocaleString(),
    },
  ]);
  const [theme, setTheme] = useState("");
  const [msg, setMsg] = useState(null);

  const colorScheme = useColorScheme();

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  useEffect(() => {
    AsyncStorage.getItem("todos").then((storedTodos) => {
      new Date().toLocaleString();
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    });
  }, []);

  const handleSwipeRight = (id) => {
    let oldTodos = todos;
    let itemTitle = "";
    todos.forEach((todo) => {
      if (todo.key === id) {
        return (itemTitle = todo.title);
      }
    });

    setTodos((prevTodos) => prevTodos.filter((t) => t.key !== id));

    let flag = true;

    const handleUndo = () => {
      flag && setTodos(oldTodos);
      flag = false;
    };

    let msg = "Item" + " " + "{" + itemTitle + "}" + " " + "is Deleted!";
    setMsg(
      <Msg delMsg={msg} button={true} btnText="Undo" btnOnPress={handleUndo} />
    );
    setTimeout(() => setMsg(null), 5000);
  };

  const addTodo = (text, desc, date) => {
    setTodos((prevTodos) => {
      return [
        {
          title: text,
          key: Math.random().toString(),
          desc: desc,
          reminderTime: date.toLocaleString(),
          date: new Date().toLocaleString(),
        },
        ...prevTodos,
      ];
    });

    let msg = "Item" + " " + "{" + text + "}" + " " + "is Added!";
    setMsg(<Msg addMsg={msg} />);
    setTimeout(() => setMsg(null), 1000);
  };

  useEffect(() => {
    AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={
          theme === "dark"
            ? styles.darkTheme.container
            : styles.lightTheme.container
        }
      >
        <AddTodo addTodo={addTodo} />
        <TodoContainer onSwipeRight={handleSwipeRight} todos={todos} />
        {msg != null && msg}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  lightTheme: {
    container: {
      position: "relative",
      backgroundColor: "#fff",
      height: "100%",
      alignItems: "center",
    },
  },
  darkTheme: {
    container: {
      position: "relative",
      backgroundColor: "#000",
      height: "100%",
      alignItems: "center",
    },
  },
});

export default Home;
