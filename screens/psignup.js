import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { auth } from "../firebase";

export default function PassengerSignupScreen({ navigation }) {
  //const { navigate } = this.props.navigation;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nmbr, setNmbr] = useState("");
  const [cnic, setCNIC] = useState("");
  const [name, setName] = useState("");

  const SignupHandler = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      });
  };

  const pressHandler2 = () => {
    navigation.navigate("OTP");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Passenger Signup</Text>
      <Text style={styles.marg}>Enter Full Name </Text>
      <TextInput
        style={styles.input}
        id="psnname"
        placeholder="PSGRName"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.marg}>Enter Password </Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        id="psnpasswrd"
        placeholder="PSGRPass"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={styles.marg}>Confirm Password </Text>
      <TextInput style={styles.input} secureTextEntry={true} id="psnpasswrd2" />
      <Text style={styles.marg}>Enter Email </Text>
      <TextInput
        style={styles.input}
        id="psnemail"
        placeholder="PSGNEmail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.marg}>Enter Phone Number </Text>
      <TextInput
        style={styles.input}
        id="psnnumber"
        placeholder="PSGNNmbr"
        value={nmbr}
        onChangeText={(text) => setNmbr(text)}
      />
      <Text style={styles.marg}>Enter CNIC </Text>
      <TextInput
        style={styles.input}
        id="psncnic"
        placeholder="PSGNCNIC"
        value={cnic}
        onChangeText={(text) => setCNIC(text)}
      />
      <Button title="Register" onPress={SignupHandler} />
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
