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
    height: "50%",
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
    fontSize: 20,
    marginLeft: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fffff94b",
    alignSelf: "flex-start",
    borderRadius: 10,
    textAlign: "center",
    color: "#000000",
  },
  description: {
    transform: [{ translateY: Dimensions.get("window").width * 0.4 }],
    gap: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    height: "12%",
    marginHorizontal: "5%",
    borderRadius: 10,
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    width: 100,
  },
  descriptionSubtitle: {
    textAlign: "center",
    fontSize: 18,
    width: 100,
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
  const styleContainerInfo = [
    styles.infoContainer,
    route.params.type === "fire" && { backgroundColor: fire },
    route.params.type === "grass" && { backgroundColor: grass },
    route.params.type === "water" && { backgroundColor: water },
    route.params.type === "bug" && { backgroundColor: bug },
    route.params.type === "normal" && { backgroundColor: normal },
  ];
  const styleCard = [
    route.params.type === "fire" && styles.fire,
    route.params.type === "grass" && styles.grass,
    route.params.type === "water" && styles.water,
    route.params.type === "bug" && styles.bug,
    route.params.type === "normal" && styles.normal,
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={styleCard}>
          <Text style={styles.title}>{route.params.title}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subTitle}>{route.params.type}</Text>
            <Text style={styles.subTitle}>#0{route.params.props.order}</Text>
          </View>
        </View>
        <View style={styles.subContainer}>
          <Image
            style={styles.img}
            source={{
              uri: route.params.props.sprites.other["official-artwork"]
                .front_default,
            }}
          />

          <View style={styles.description}>
            <View style={styleContainerInfo}>
              <Text style={styles.descriptionTitle}>Type:</Text>
              <Text style={styles.descriptionSubtitle}>
                {route.params.type}
              </Text>
            </View>
            <View style={styleContainerInfo}>
              <Text style={styles.descriptionTitle}>Ability:</Text>
              <Text style={styles.descriptionSubtitle}>
                {route.params.props.abilities[1]?.ability.name}
              </Text>
            </View>
            <View style={styleContainerInfo}>
              <Text style={styles.descriptionTitle}>weight:</Text>
              <Text style={styles.descriptionSubtitle}>
                {route.params.props.weight}
              </Text>
            </View>
            <View style={styleContainerInfo}>
              <Text style={styles.descriptionTitle}>height:</Text>
              <Text style={styles.descriptionSubtitle}>
                {route.params.props.height}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Profile;
