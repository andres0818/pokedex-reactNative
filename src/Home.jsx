import { Button, Text } from "react-native";
const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("Profile", { name: "Andres" ,age:12 })}
    />
  );
};

export default HomeScreen;
