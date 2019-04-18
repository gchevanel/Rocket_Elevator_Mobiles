import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import HomeScreen from "../screens/HomeScreen";
import ElevatorScreen from "../screens/ElevatorScreen";
import SettingScreen from "../screens/SettingsScreen";
import ElevatorEditScreen from "../screens/ElevatorEditScreen";
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: HomeScreen,
    Elevator: ElevatorScreen,
    // Elevator: ElevatorScreen,
    // Setting: SettingScreen,
    ElevEdit: ElevatorEditScreen
  })
);
