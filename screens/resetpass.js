import React from "react";
import { StyleSheet, Text, View, Button,TextInput } from "react-native";

export default function ResetPasswordScreen({ navigation }) {
  //const { navigatee } = this.props.navigation;
  const pressHandler2 = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter New Password</Text>
      <TextInput style={styles.input} id='rnewpass'/>
      <Text style={styles.title}>Confirm New Password</Text>
      <TextInput style={styles.input} id='rconfmpass'/>
      <Button title="Reset" onPress={pressHandler2} />

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
    padding: 8,
    margin: 10,
    width: 200,
  },
  marg: {
    margin: 10,
  },
});
