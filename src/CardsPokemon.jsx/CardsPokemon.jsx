import { useEffect, useState } from "react";
import { getApi } from "../API/api";

const { Text, Image, View, StyleSheet } = require("react-native");

export const CardsPokemon = ({ ...props }) => {
  const [details, setDetails] = useState();

  useEffect(() => {
    getApi(props.url).then((res) => setDetails(res.data.sprites));
  }, []);

  return (
    <View style={styles.container}>
      {details && (
        <Image
          source={{
            uri: details?.front_default,
          }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <Text style={{ color: "red" }}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    width: 320,
    height: 250,
    borderColor:"gray",
    borderRadius:15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding: 10,

  },
});
