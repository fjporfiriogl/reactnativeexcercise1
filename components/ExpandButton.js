import { StyleSheet, Text, View, Pressable } from "react-native";

export const ExpandButton = ({ pressHandler, text }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        android_ripple={{ color: "#edede9" }}
        onPress={pressHandler}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderWidth: 3,
    borderColor: "#f4a261",
    borderStyle: "dashed",
  },
  buttonInnerContainer: {
    alignItems: "center",
  },
  buttonText: {
    color: "#e63946",
    fontSize: 18,
    fontWeight: 900,
  },
});
