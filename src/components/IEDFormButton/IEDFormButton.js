import React from "react";
import { Button, View } from "react-native";
import styles from "./styles";

function IEDFormButton(props) {
  const { title, onClick, disable } = props;

  return (
    <View style={styles.container}>
      <Button
        title={title}
        style={styles.loginButton}
        onPress={onClick}
        disabled={disable}
      />
    </View>
  );
}

export default IEDFormButton;
