import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Context from "./src/context/Context";
import ProfileScreen from "./src/Profile";
import { PokedexTitle } from "./src/IconNavBar/IconNavBar";
import icon from './src/img/pokedex-icon.jpg'
import { HomeScreen } from "./src/Home";

const Stack = createStackNavigator();





function App() {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Pokedex"
            options={{ headerTitle: () => <PokedexTitle icon={icon} title='Pokedex' /> }}
            component={HomeScreen}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}
export default App;
