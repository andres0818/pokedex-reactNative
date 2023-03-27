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
    height: 140,
    borderColor: "gray",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 5,
  },
  img: {
    width: "60%",
    height: 150,
    position: "absolute",
    right: -10,
    top: 10,
  },
  subContainer: {},
  fire: { backgroundColor: "#ff5a5a" },
  water: { backgroundColor: "#5ac0ff" },
  grass: { backgroundColor: "#68ff74" },
  bug: { backgroundColor: "#95ff97" },
  normal: { backgroundColor: "#bfbfbf" },
});

const Card = ({ navigation,tipe, ...props }) => {
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
        })
      }
    >
      <View style={styleCard}>
        <View style={styles.subContainer}>
          <Text style={{ color: "black" }}>{props.name}</Text>
          <Text style={{ color: "black" }}>{tipe}</Text>
        </View>
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
