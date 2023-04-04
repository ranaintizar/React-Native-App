import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  useColorScheme,
  Keyboard,
} from "react-native";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [theme, setTheme] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const colorScheme = useColorScheme();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (mode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: mode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  const handleTitleChange = (val) => {
    setText(val);
  };

  const handleDescChange = (val) => {
    setDesc(val);
  };

  const handleSubmit = () => {
    if (text === "") {
      Alert.alert("OOPs!", "Please enter a todo Title", [{ title: "Ok" }]);
    } else if (desc === "") {
      Alert.alert("OOPs!", "Please enter a todo Description", [
        { title: "Ok" },
      ]);
    } else {
      addTodo(text, desc, date);
      Keyboard.dismiss();
    }
    setText("");
    setDesc("");
  };

  return (
    <View
      style={
        theme === "dark"
          ? styles.darkTheme.container
          : styles.lightTheme.container
      }
    >
      <TextInput
        style={
          theme === "dark" ? styles.darkTheme.input : styles.lightTheme.input
        }
        placeholder="Todo title..."
        value={text}
        onChangeText={handleTitleChange}
      />
      <TextInput
        style={
          theme === "dark" ? styles.darkTheme.input : styles.lightTheme.input
        }
        placeholder="Todo description..."
        value={desc}
        onChangeText={handleDescChange}
      />
      <View style={styles.dateTimePicker}>
        <TouchableOpacity style={styles.dateTimeBtn} onPress={showDatepicker}>
          <Text style={styles.dateTimeText}>Set Date</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateTimeBtn} onPress={showTimepicker}>
          <Text style={styles.dateTimeText}>Set Time</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={
          theme === "dark"
            ? styles.darkTheme.btnContainer
            : styles.lightTheme.btnContainer
        }
        onPress={handleSubmit}
      >
        <Text
          style={
            theme === "dark" ? styles.darkTheme.text : styles.lightTheme.text
          }
        >
          Add Todo
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dateTimePicker: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  dateTimeBtn: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#1e90ff",
    borderRadius: 7,
  },
  dateTimeText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  lightTheme: {
    container: {
      width: "80%",
      marginTop: 40,
      gap: 20,
    },
    input: {
      padding: 10,
      borderBottomColor: "gray",
      borderBottomWidth: 1,
      fontSize: 20,
    },
    btnContainer: {
      backgroundColor: "dodgerblue",
      paddingVertical: 12,
      borderRadius: 10,
    },
    text: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
  },
  darkTheme: {
    container: { width: "80%", marginTop: 40, gap: 20 },
    input: {
      padding: 10,
      borderBottomColor: "gray",
      borderBottomWidth: 1,
      fontSize: 20,
      color: "dodgerblue",
      backgroundColor: "white",
      borderRadius: 10,
    },
    btnContainer: {
      backgroundColor: "dodgerblue",
      paddingVertical: 12,
      borderRadius: 10,
    },
    text: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
  },
});

export default AddTodo;
