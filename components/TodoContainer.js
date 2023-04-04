import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import TodoCard from "./TodoCard";

const TodoContainer = ({ todos, onSwipeRight }) => {
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    if (todos.length === 0) {
      setShowMsg(true);
    } else {
      setShowMsg(false);
    }
  }, [todos]);

  const renderItem = ({ item }) => (
    <TodoCard todo={item} onSwipeRight={() => onSwipeRight(item.key)} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.note}>Swipe Right to Delete</Text>
      {showMsg && (
        <Text style={styles.error}>
          Your todo list is waiting for some tasks to be added.
        </Text>
      )}
      <FlatList data={todos} renderItem={renderItem} style={styles.list} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
    gap: 10,
    paddingHorizontal: 10,
  },
  note: {
    color: "#999",
    marginBottom: 10,
  },
  error: { color: "#999", marginTop: 100, fontSize: 20, textAlign: "center" },
});

export default TodoContainer;
