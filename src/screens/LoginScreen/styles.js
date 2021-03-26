import { StyleSheet, Dimensions } from "react-native";
const { Height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // loginScreenTitle: {
  //   fontSize: 17,
  //   fontWeight: "bold",
  // },$
  invalidInput: {
    color: "#cc0000",
    fontSize: 12,
  },
  validInput: {
    marginTop: 2,
    color: "#25CE69",
    fontSize: 12,
  },
});

export default styles;
