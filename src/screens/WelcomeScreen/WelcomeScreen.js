import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

const WelcomeScreen = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerStyle: {
        backgroundColor: "#000000",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerRight: () => (
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            marginRight: 10,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          {/* <Image
            // style={{ width: "100%", height: "100%" }}
            source={{ uri: "asset:/logout.png" }}
          /> */}
          <Text style={{ fontSize: 15, color: "#FFFFFF" }}>Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <LinearGradient colors={["#dd5e89", "#f7bb97"]} style={styles.container}>
      <Image style={styles.logoIED} source={{ uri: "asset:/ied-logo.png" }} />
      <Text style={styles.welcomeTitle}>
        {route.params.collaborator ? "Hello Dear Collaborator!" : "Welcome !"}
      </Text>
    </LinearGradient>
  );
};

export default WelcomeScreen;
