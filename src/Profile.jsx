import { StyleSheet, Text } from "react-native";
import { PokedexTitle } from "./IconNavBar/IconNavBar";

const ProfileScreen = ({ route, navigation }) => {
  navigation.setOptions({
    headerTitle: () => <PokedexTitle icon={route.params.icon} title={route.params.title} />,
  });
  return <Text style={styles.text}>This is </Text>;
};

export default ProfileScreen;

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
});
