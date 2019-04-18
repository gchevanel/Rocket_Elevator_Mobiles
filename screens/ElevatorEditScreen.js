import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sizelogout: { height: 0, width: 0 },
      stylelog: "",
      hidebutton: "",
      buttonColor: "red",
      title: "change status to Active",
      data: null,
      loaded: true,
      error: null
    };
  }

  PUTData = ev => {
    this.onButtonPress();
    var elevatorid = this.props.navigation.state.params.elevator.id;
    var status = this.props.navigation.state.params.elevator.status;

    fetch(
      "https://rocketelevatorsgab.azurewebsites.net/api/elevator/" + elevatorid,

      {
        credentials: "include",
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: elevatorid,
          status: "Active"
        })
      }
    );
  };
  onButtonPress = () => {
    this.setState({
      sizelogout: { height: 20, width: 275, marginTop: 20 },

      hidebutton: "LOG OUT",
      buttonColor: "#008000",
      title: "Status is now Active"
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/R2.png")}
          style={styles.rocketimages}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", top: 80 }}>
          elevator id :{this.props.navigation.state.params.elevator.id}
        </Text>
        <View style={{ width: 275, marginTop: 90 }}>
          <Button
            style={styles.ElevatorButtton}
            title={this.state.title}
            onPress={() => this.PUTData()}
            color={this.state.buttonColor}
            onValueChange={value => this.setState({ isHidden: value })}
            value={this.state.isHidden}
          />
        </View>
        <View style={{ width: 275, marginTop: 20 }}>
          <Button
            style={styles.ButtonRedirect}
            title="Elevator List"
            onPress={() => this.props.navigation.navigate("Elevator")}
          />
        </View>

        <View style={this.state.sizelogout}>
          <Button
            title={this.state.hidebutton}
            onPress={() => this.props.navigation.navigate("Main")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff"
    // justifyContent: "center"
  },

  ElevatorButtton: {
    marginTop: 150
  },
  rocketimages: {
    height: 90,
    width: 250,
    top: 50
  },

  err: {
    alignItems: "center",
    color: "red",
    fontSize: 30,
    fontWeight: "bold"
  }
});
