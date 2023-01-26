import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import themeContext from "../theme/themeContext";

const Profile = () => {
  const theme = useContext(themeContext);
  return (
    <View style={[style.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[style.text, { color: theme.color }]}>Profile</Text>
    </View>
  );
};

export default Profile;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
