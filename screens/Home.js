import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import themeContext from "../theme/themeContext";

const Home = () => {
  const theme = useContext(themeContext);
  return (
    <View style={[style.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[style.text, { color: theme.color }]}>Home</Text>
    </View>
  );
};

export default Home;

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
