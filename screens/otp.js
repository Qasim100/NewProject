import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function OTPScreen({ navigation }) {
  //const { navigatee } = this.props.navigation;
  const pressHandler1 = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput style={styles.input} id="otpp" />
      <Button title="Verify" onPress={pressHandler1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 3,
    margin: 7,
    width: 200,
  },
  marg: {
    margin: 10,
  },
});
