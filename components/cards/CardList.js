import { StyleSheet, Text, View, FlatList } from "react-native";
import { Card } from "./Card";

const placeHolder = [1, 2, 3, 4, 5];

export const CardList = ({ data }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Card {...item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: "5%",
    columnGap: 20,
  },
});
