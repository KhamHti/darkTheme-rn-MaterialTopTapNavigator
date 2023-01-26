import { View, Text, Switch, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { EventRegister } from "react-native-event-listeners";

import themeContext from "../theme/themeContext";

const Setting = () => {
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={[style.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[style.text, { color: theme.color }]}>Setting</Text>
      <Switch
        value={darkMode}
        onValueChange={(value) => {
          setDarkMode(value);
          EventRegister.emit("ChangeTheme", value);
        }}
      />
    </View>
  );
};

export default Setting;

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
