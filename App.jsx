import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Context from "./src/context/Context";
import HomeScreen from "./src/Home";
import ProfileScreen from "./src/Profile";

const Stack = createStackNavigator();

function App() {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{ title: "Welcome" }}
            component={HomeScreen}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}
export default App;
