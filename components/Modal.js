import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Modal,
  View,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

const ModalView = ({ isVisible, setVisible, todo }) => {
  const [theme, setTheme] = useState("");

  const colorScheme = useColorScheme();

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  return (
    <Modal visible={isVisible} animationType="slide" style={styles.modal}>
      <View
        style={
          theme === "dark"
            ? styles.darkTheme.container
            : styles.lightTheme.container
        }
      >
        <View
          style={
            theme === "dark"
              ? styles.darkTheme.content
              : styles.lightTheme.content
          }
        >
          <Text
            style={
              theme === "dark"
                ? styles.darkTheme.title
                : styles.lightTheme.title
            }
          >
            {todo.title}
          </Text>
          <Text
            style={
              theme === "dark" ? styles.darkTheme.desc : styles.lightTheme.desc
            }
          >
            {todo.desc}
          </Text>
          <Text
            style={
              theme === "dark"
                ? styles.darkTheme.reminderTime
                : styles.lightTheme.reminderTime
            }
          >
            Reminder Time : {todo.reminderTime.toLocaleString()}
          </Text>
          <View
            style={
              theme === "dark"
                ? styles.darkTheme.divider
                : styles.lightTheme.divider
            }
          ></View>
          <View
            style={
              theme === "dark"
                ? styles.darkTheme.dateContainer
                : styles.lightTheme.dateContainer
            }
          >
            <Text
              style={
                theme === "dark"
                  ? styles.darkTheme.date
                  : styles.lightTheme.date
              }
            >
              Added on
            </Text>
            <Text
              style={
                theme === "dark"
                  ? styles.darkTheme.date
                  : styles.lightTheme.date
              }
            >
              {todo.date}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={
            theme === "dark"
              ? styles.darkTheme.btnContainer
              : styles.lightTheme.btnContainer
          }
          onPress={() => setVisible(false)}
        >
          <Text
            style={
              theme === "dark"
                ? styles.darkTheme.button
                : styles.lightTheme.button
            }
          >
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  lightTheme: {
    divider: {
      position: "absolute",
      bottom: 40,
      width: "100%",
      left: 20,
      height: 2,
      backgroundColor: "#3333",
    },
    container: {
      flex: 1,
      position: "relative",
      paddingVertical: 50,
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
    },
    content: {
      justifyContent: "flex-start",
      gap: 20,
      paddingHorizontal: 20,
      position: "relative",
      height: 400,
      width: "100%",
    },
    title: { fontWeight: "bold", fontSize: 30, color: "#666" },
    desc: { fontSize: 20, color: "#666" },
    reminderTime: {
      fontSize: 20,
      color: "#666",
      position: "absolute",
      bottom: 50,
      paddingHorizontal: 20,
    },
    dateContainer: {
      position: "absolute",
      marginTop: 20,
      bottom: 10,
      left: 20,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    date: { fontSize: 17, color: "#666" },
    btnContainer: {
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: "dodgerblue",
      borderRadius: 8,
      position: "absolute",
      bottom: 20,
      width: 150,
    },
    button: {
      fontSize: 20,
      color: "white",
    },
  },
  darkTheme: {
    divider: {
      position: "absolute",
      bottom: 40,
      width: "100%",
      left: 20,
      height: 2,
      backgroundColor: "#fff",
    },
    container: {
      flex: 1,
      backgroundColor: "#000",
      position: "relative",
      paddingVertical: 50,
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
    },
    content: {
      justifyContent: "flex-start",
      gap: 20,
      paddingHorizontal: 20,
      position: "relative",
      height: 400,
      width: "100%",
    },
    title: { fontWeight: "bold", fontSize: 30, color: "white" },
    desc: { fontSize: 20, color: "white" },
    reminderTime: {
      fontSize: 20,
      color: "#666",
      position: "absolute",
      bottom: 50,
      paddingHorizontal: 20,
    },
    dateContainer: {
      position: "absolute",
      marginTop: 20,
      bottom: 10,
      left: 20,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    date: { fontSize: 17, color: "white" },
    btnContainer: {
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: "dodgerblue",
      borderRadius: 8,
      position: "absolute",
      bottom: 20,
      width: 150,
    },
    button: {
      fontSize: 20,
      color: "white",
    },
  },
});

export default ModalView;
