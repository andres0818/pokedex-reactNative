import { Image, StyleSheet, Text, View } from "react-native";

export const PokedexTitle = ({ ...props }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image style={styles.img} source={props.icon===1?props.icon:{uri:props.icon}} />
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 36,
    height: 46,
    marginRight:10
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
