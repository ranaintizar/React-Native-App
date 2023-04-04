import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  useColorScheme,
  Button,
} from "react-native";

const About = () => {
  const [theme, setTheme] = useState("");
  const colorScheme = useColorScheme();

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  return (
    <View
      style={
        theme === "dark"
          ? styles.darkTheme.container
          : styles.lightTheme.container
      }
    >
      <Text
        style={
          theme === "dark" ? styles.darkTheme.text : styles.lightTheme.text
        }
      >
        Welcome to Todo, the ultimate mobile app for keeping track of your tasks
        and to-do lists! Created by{" "}
        <Text
          style={
            theme === "dark"
              ? styles.darkTheme.author
              : styles.lightTheme.author
          }
          onPress={() => Linking.openURL("https://linktr.ee/ranaintizar")}
        >
          @ranaintizar
        </Text>
        , Todo allows you to easily organize your daily routine, set priorities
        for your tasks, and make sure you never forget an important deadline
        again. Our user-friendly interface allows you to quickly create, edit,
        and complete tasks, and our powerful notification system ensures that
        you stay on top of your schedule. Whether you're a busy professional or
        a student with a lot on your plate, Todo has everything you need to stay
        organized and productive. Download now and start making every day more
        efficient with Todo!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lightTheme: {
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingVertical: 20,
      paddingHorizontal: 30,
      justifyContent: "center",
    },
    text: {
      color: "dodgerblue",
      fontSize: 22,
      textAlign: "justify",
    },
    author: {
      fontWeight: "bold",
      textDecorationLine: "underline",
      backgroundColor: "dodgerblue",
      color: "white",
    },
  },
  darkTheme: {
    container: {
      flex: 1,
      backgroundColor: "#000",
      paddingVertical: 20,
      paddingHorizontal: 30,
      justifyContent: "center",
    },
    text: {
      color: "dodgerblue",
      fontSize: 22,
      textAlign: "justify",
    },
    author: {
      fontWeight: "bold",
      textDecorationLine: "underline",
      backgroundColor: "dodgerblue",
      color: "white",
    },
  },
});

export default About;
