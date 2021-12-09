import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { auth } from "../firebase";
export default function LoginScreen({ navigation }) {
  //const { navigate } = this.props.navigation;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const pressHandler1 = () => {
    navigation.navigate("Home");
  };
  const pressHandler2 = () => {
    navigation.navigate("ForgotPass");
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("NewHome");
      }
    });
    return unsubscribe;
  }, []);
  const SigninHandler = () => {
    auth.signInWithEmailAndPassword(email, password).then((userCredentials) => {
      const user = userCredentials.user;
      console.log("Logged In With: ", user.email);
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.marg}>Enter Phone Number/Email </Text>
      <TextInput
        style={styles.input}
        id="mailnumber"
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        id="paassword"
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Forgot Password?" onPress={pressHandler2} />
      <Button title="Login" onPress={SigninHandler} />

      <Button title="Home" onPress={pressHandler1} />
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
