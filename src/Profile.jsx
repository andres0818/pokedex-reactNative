import { useEffect } from "react";
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { PokedexTitle } from "./IconNavBar/IconNavBar";

const fire = "#ff5a5a";
const water = "#5ac0ff";
const grass = "#50ab58";
const bug = "#407041";
const normal = "#bfbfbf";

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
  container: {
    height: "100%",
    overflow: "hidden",
  },
  subContainer: {
    height: "80%",
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "white",
    transform: [{ translateY: -120 }],
  },
  fire: {
    height: "50%",
    backgroundColor: fire,
  },
  water: {
    height: "50%",
    backgroundColor: water,
  },
  grass: {
    height: "50%",
    backgroundColor: grass,
  },
  bug: {
    height: "50%",
    backgroundColor: bug,
  },
  normal: {
    height: "50%",
    backgroundColor: normal,
  },
  img: {
    width: "80%",
    height: "60%",
    position: "absolute",
    display: "flex",
    top: "-30%",
    left: "50%",
    transform: [{ translateX: -Dimensions.get("window").width * 0.4 }],
    zIndex: 4,
  },
  title: {
    textAlignVertical: "center",
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
  },
  subTitle: {
    fontWeight: "bold",
    marginLeft: 20,
    paddingHorizontal:10,
    backgroundColor: "#fffff94b",
    alignSelf: "flex-start",
    borderRadius: 10,
    textAlign: "center",
    color: "#000000",
  },
});

const Profile = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <PokedexTitle icon={route.params.icon} title={route.params.title} />
      ),
    });
  }, []);

  const styleCard = [
    route.params.tipe === "fire" && styles.fire,
    route.params.tipe === "grass" && styles.grass,
    route.params.tipe === "water" && styles.water,
    route.params.tipe === "bug" && styles.bug,
    route.params.tipe === "normal" && styles.normal,
  ];

  return (
    <>
      <View style={styles.container}>
        <View style={styleCard}>
          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={styles.subTitle}>{route.params.tipe}</Text>
        </View>
        <View style={styles.subContainer}>
          <Image style={styles.img} source={{ uri: route.params.icon }} />
        </View>
      </View>
    </>
  );
};

export default Profile;
