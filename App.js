import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { EventRegister } from "react-native-event-listeners";

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Setting from "./screens/Setting";
import theme from "./theme/theme";
import themeContext from "./theme/themeContext";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
      // console.log(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);

  return (
    <themeContext.Provider value={darkMode ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
        <Tab.Navigator style={{ marginTop: 45 }} initialRouteName="Setting">
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}
