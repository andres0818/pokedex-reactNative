import { useContext, useEffect } from "react";
import { Button, FlatList, Image, Text } from "react-native";
import { CardsPokemon } from "./CardsPokemon.jsx/CardsPokemon";
import { dataContext } from "./context/Context";

export const HomeScreen = ({ navigation }) => {
  const { data } = useContext(dataContext);

 
  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardsPokemon {...item} />}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
