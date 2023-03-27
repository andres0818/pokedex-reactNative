import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PokedexTitle } from "./src/IconNavBar/IconNavBar";
import { HomeScreen } from "./src/Home";
import { StatusBar } from "react-native";
import Context from "./src/context/Context";
import icon from "./src/img/pokedex-icon.jpg";
import Profile from "./src/Profile";

const Stack = createStackNavigator();

function App() {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Pokedex"
            options={{
              headerTitle: () => <PokedexTitle icon={icon} title="Pokedex" />,
            }}
            component={HomeScreen}
          />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor={"transparent"} />
    </Context>
  );
}
export default App;
