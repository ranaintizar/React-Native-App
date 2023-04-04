import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Msg = ({ delMsg, addMsg, button, btnText, btnOnPress }) => {
  return (
    <View
      style={
        (delMsg != null && styles.delMsg.container) ||
        (addMsg != null && styles.addMsg.container)
      }
    >
      <Text
        style={
          (delMsg != null && styles.delMsg.text) ||
          (addMsg != null && styles.addMsg.text)
        }
      >
        {delMsg || addMsg}
      </Text>
      {button && <Button title={btnText} onPress={() => btnOnPress()} />}
    </View>
  );
};

const styles = StyleSheet.create({
  delMsg: {
    container: {
      position: "absolute",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: "white",
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 10,
      bottom: 15,
      shadowColor: "#000",
      width: "90%",
      justifyContent: "space-between",
      elevation: 5,
    },
    text: {
      color: "red",
      fontSize: 20,
      fontWeight: "bold",
      maxWidth: "80%",
    },
  },
  addMsg: {
    container: {
      position: "absolute",
      width: "90%",
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: "#1e90ff",
      borderRadius: 5,
      bottom: 10,
    },
    text: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
    },
  },
});

export default Msg;
