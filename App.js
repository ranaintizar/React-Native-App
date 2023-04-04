import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StatusBar, useColorScheme } from "react-native";
import Home from "./components/Home";
import About from "./components/About";

const Stack = createNativeStackNavigator();

const App = () => {
  const [theme, setTheme] = React.useState("");
  const colorScheme = useColorScheme();

  React.useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "#1e90ff",
          headerStyle: { backgroundColor: theme === "dark" ? "#333" : "#fff" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("About")}
                title="About"
                color="#1e90ff"
              />
            ),
          })}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
};

export default App;
