import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 160,
    height: 100,
    borderColor: "gray",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 5,
    padding: 10,
  },
  img: {
    width: "80%",
    height: 110,
    position: "absolute",
    right: -26,
    top: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 10,
    marginBottom: 5,
    alignSelf: "flex-start",
    paddingHorizontal: 5,
    color: "white",
    backgroundColor: "#82818169",
  },
  fire: { backgroundColor: "#ff5a5a" },
  water: { backgroundColor: "#5ac0ff" },
  grass: { backgroundColor: "#50ab58" },
  bug: { backgroundColor: "#407041" },
  normal: { backgroundColor: "#bfbfbf" },
});

const Card = ({ navigation, tipe, ...props }) => {
  const styleCard = [
    styles.container,
    tipe === "fire" && styles.fire,
    tipe === "grass" && styles.grass,
    tipe === "water" && styles.water,
    tipe === "bug" && styles.bug,
    tipe === "normal" && styles.normal,
  ];

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("Profile", {
          title: props.name,
          icon: props?.sprites.front_default,
          tipe,
          props,
        })
      }
    >
      <View style={styleCard}>
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.text}>{tipe}</Text>
        {props.sprites?.front_default && (
          <Image
            source={{
              uri: props.sprites?.front_default,
            }}
            style={styles.img}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
