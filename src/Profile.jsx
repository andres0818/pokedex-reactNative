import { StyleSheet, Text } from "react-native";

const ProfileScreen = ({route}) => {
    return <Text style={styles.text}>This is {route.params.name}'s profile and have {route.params.age} old's</Text>;
  };

export default ProfileScreen

const styles = StyleSheet.create({
text:{
    color:"black"
}
})