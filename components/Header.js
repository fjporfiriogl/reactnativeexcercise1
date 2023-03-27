import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.navItem}>Home</Text>
      <Text style={styles.navItem}>About Us</Text>
      <Text style={styles.navItem}>Contact Us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: 5,
    borderColor: "#E63946",
    backgroundColor: "#657780",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingBottom: 10,
  },
  navItem: {
    color: "#fff",
  },
});
