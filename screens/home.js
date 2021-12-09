import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  
  //const { navigatee } = this.props.navigation;
  const pressHandler1 = () => {
    navigation.navigate("Login");
  };
  const pressHandler2 = () => {
    navigation.navigate("UserType");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome</Text>
        <Button style={styles.marg} title="Login" onPress={pressHandler1} />
        <Button style={styles.marg} title="SignUp" onPress={pressHandler2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "center",
  },
  title: {
    fontSize: 30,
  },
  marg: {
    marginTop: 5,
  },
});
