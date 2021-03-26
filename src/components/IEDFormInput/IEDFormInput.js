import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from "./styles";

function IEDFormInput(props) {
  const { type, value, onChange, validation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{type}</Text>
      <TextInput
        secureTextEntry={type === "Password" ? true : false}
        style={styles.textInput}
        onChangeText={onChange}
        value={value}
      />
      {validation(type)}
      {/* {console.log(error(type))} */}
    </View>
  );
}

export default IEDFormInput;
