import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ic_logo } from "./src/assets/icons/generated";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface Props {}

interface State {}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 100, height: 100 }} source={ic_logo} />
        <Text>Hello World!!!</Text>
      </View>
    );
  }
}
