import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ElevatorScreen from "../screens/ElevatorScreen";
import ElevatorEditScreen from "../screens/ElevatorEditScreen";

// const HomeStack = createStackNavigator({
//   Home: HomeScreen
// });

// HomeStack.navigationOptions = {
//   tabBarLabel: "Login",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-information-circle${focused ? "" : "-outline"}`
//           : "md-information-circle"
//       }
//     />
//   )
// };

const ElevatorStack = createStackNavigator({
  Elevator: ElevatorScreen
});

ElevatorStack.navigationOptions = {
  tabBarLabel: "Elevator",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-move" : "md-move"}
    />
  )
};

const ElevatorEditStack = createStackNavigator({
  ElevatorEdit: ElevatorEditScreen
});

ElevatorEditStack.navigationOptions = {
  tabBarLabel: "Elevator Edit",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-move" : "md-move"}
    />
  )
};

export default createBottomTabNavigator({
  //   HomeStack,
  ElevatorStack
});
