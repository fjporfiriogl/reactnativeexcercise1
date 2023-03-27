import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ExpandButton } from "../ExpandButton";

export const Card = ({ title, description, priority }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const numberOfLines = isExpanded ? 0 : 4;
  const height = { height: isExpanded ? "auto" : 200 };
  const buttonText = isExpanded ? "Show Less" : "Show More";
  const colorPriority = (() => {
    let color;
    if (priority == "high") {
      color = "red";
    } else if (priority == "medium") {
      color = "yellow";
    } else {
      color = "gray";
    }
    return { backgroundColor: color };
  })();

  const pressHandler = () => {
    setIsExpanded((prevState) => {
      return !prevState;
    });
  };

  return (
    <View style={[styles.cardContainer, height]}>
      <View style={[styles.cardIcon, colorPriority]}></View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text numberOfLines={numberOfLines} style={styles.cardDescription}>
          {description}
        </Text>
        <ExpandButton text={buttonText} pressHandler={pressHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#edf2f4",
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    elevation: 4,
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "red",
    backgroundColor: "red",
    alignSelf: "center",
  },
  cardContent: {
    flex: 1,
    paddingLeft: "3%",
  },
  cardTitle: {
    display: "flex",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    flex: 1,
  },
});
