import { StyleSheet, Text, View } from "react-native";
import { PokedexTitle } from "./IconNavBar/IconNavBar";

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
  container: {
    height: "100%",
  },
  subContainer: {
    height: "50%",
  },
  fire: { backgroundColor: "#ff5a5a" },
  water: { backgroundColor: "#5ac0ff" },
  grass: { backgroundColor: "#50ab58" },
  bug: { backgroundColor: "#407041" },
  normal: { backgroundColor: "#bfbfbf" },
});

const Profile = ({ route, navigation }) => {
  navigation.setOptions({
    headerTitle: () => (
      <PokedexTitle icon={route.params.icon} title={route.params.title} />
    ),
  });

  const styleCard = [
    styles.container,
    route.params.tipe === "fire" && styles.fire,
    route.params.tipe === "grass" && styles.grass,
    route.params.tipe === "water" && styles.water,
    route.params.tipe === "bug" && styles.bug,
    route.params.tipe === "normal" && styles.normal,
  ];
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}></View>
      <View style={styles.subContainer}></View>
    </View>
  );
};

export default Profile;
