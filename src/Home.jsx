import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CardsPokemon } from "./CardsPokemon.jsx/CardsPokemon";
import { dataContext } from "./context/Context";
import Loading from "./Loading";

export const HomeScreen = ({ navigation }) => {
  const { data } = useContext(dataContext);

  const ItemSeparador = () => <View style={{ height: 15 }}></View>;

  return (
    <>
      {data ? (
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-around" }}
          contentContainerStyle={styles.flatList}
          ItemSeparatorComponent={ItemSeparador}
          numColumns={2}
          data={data}
          renderItem={({ item }) => (
            <CardsPokemon navigation={navigation} {...item} />
          )}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <View style={styles.containerLoading}>
          <Loading />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  flatList: {
    padding: 5,
    paddingBottom: 20,
  },
  containerLoading: {
    height: "100%",
    justifyContent: "center",
  },
});
