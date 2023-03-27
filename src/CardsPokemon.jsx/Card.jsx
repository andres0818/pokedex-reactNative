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

const Card = ({ navigation, type, ...props }) => {
  const styleCard = [
    styles.container,
    type === "fire" && styles.fire,
    type === "grass" && styles.grass,
    type === "water" && styles.water,
    type === "bug" && styles.bug,
    type === "normal" && styles.normal,
  ];

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("Profile", {
          title: props.name,
          icon: props?.sprites.front_default,
          type,
          props,
        })
      }
    >
      <View style={styleCard}>
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.text}>{type}</Text>
        {props.sprites?.front_default && (
          <Image
            source={{
              uri: props.sprites?.other.home.front_default,
            }}
            style={styles.img}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
