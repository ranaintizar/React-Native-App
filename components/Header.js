import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Header = ({ navigation, headerTitle, btnTitle }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{headerTitle}</Text>
    <Button title={btnTitle} onPress={() => navigation.navigate(btnTitle)} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "103%",
    marginLeft: -19,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    color: "#1e90ff",
    fontWeight: "bold",
    paddingTop: 10,
    fontSize: 25,
    textAlign: "center",
  },
});

export default Header;
