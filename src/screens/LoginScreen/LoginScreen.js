import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";
import IEDFormInput from "../../components/IEDFormInput/IEDFormInput";
import IEDFormButton from "../../components/IEDFormButton/IEDFormButton";
import LinearGradient from "react-native-linear-gradient";
import Loader from "react-native-modal-loader";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [loading, setLoading] = useState(false);

  const validation = (type) => {
    if (type === "Email") {
      /* Regex for the email format */
      const expression = new RegExp(
        /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
      );

      const result = expression.test(email);

      setEmailValidation(result);

      if (email.length >= 1) {
        if (!result) {
          return (
            <Text style={styles.invalidInput}>
              Your email format is invalid !
            </Text>
          );
        } else {
          return (
            <Text style={styles.validInput}>Your email format is valid</Text>
          );
        }
      } else {
        return null;
      }
    }

    if (type === "Password") {
      /* Regex for the special character and the minimum length (at least 6 characters) */
      const expression = new RegExp(
        /^.*(?=.{6,})(?=.*[a-z])(?=.*[$&+,:;=?@#|'<>.^*()%!-]).*$/
      );

      const result = expression.test(password);

      setPasswordValidation(result);

      if (password.length >= 1) {
        if (!result) {
          return (
            <Text style={styles.invalidInput}>
              Your password is invalid (Your password must contain at least 6
              characters including one special) !
            </Text>
          );
        } else {
          return <Text style={styles.validInput}>Your password is valid </Text>;
        }
      } else {
        return null;
      }
    }
  };

  const onButtonPress = () => {
    /* I set a timeout just to simulate a login loading*/
    setLoading(true);
    setTimeout(() => {
      navigation.navigate("Welcome", {
        collaborator: email.includes("@inextenso.fr") ? true : false,
      });
      setLoading(false);
      setEmail("");
      setPassword("");
    }, 2500);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null,
      headerStyle: {
        backgroundColor: "#000000",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    });
  }, [navigation]);

  return (
    // <View style={{ flex: 1 }}>
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps={"never"}
    >
      <LinearGradient colors={["#bdc3c7", "#2c3e50"]} style={styles.container}>
        <IEDFormInput
          type="Email"
          value={email}
          onChange={(email) => setEmail(email)}
          validation={(type) => validation(type)}
        />
        <IEDFormInput
          type="Password"
          value={password}
          onChange={(password) => setPassword(password)}
          validation={(type) => validation(type)}
        />
        <IEDFormButton
          title={"Log In"}
          onClick={() => onButtonPress()}
          disable={emailValidation & passwordValidation ? false : true}
        />
        <Loader loading={loading} color="#c4c" size="large" />
      </LinearGradient>
    </ScrollView>
    // </View>
  );
};

export default LoginScreen;
