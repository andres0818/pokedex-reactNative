import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CardsPokemon } from "./CardsPokemon.jsx/CardsPokemon";
import { dataContext } from "./context/Context";

export const HomeScreen = ({ navigation }) => {
  const { data } = useContext(dataContext);

  const ItemSeparador = () => <View style={{ height: 15 }}></View>;

  return (
    <FlatList
      contentContainerStyle={styles.container}
      style={{ backgroundColor: "white" }}
      ItemSeparatorComponent={ItemSeparador}
      data={data}
      renderItem={({ item }) => <CardsPokemon navigation={navigation} {...item} />}
      keyExtractor={(item) => item.name}
    />
  );
};

const styles = StyleSheet.create({
container:{
  width: '100%',
  alignItems: 'center',
}
})