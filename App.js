import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, ImageBackground, Text, SafeAreaView } from "react-native";
import { Header } from "./components/Header";
import { CardList } from "./components/cards/CardList";
import { getBestPractices } from "./API/getBestPractices";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const bestPractices = await getBestPractices();
      setData(bestPractices);
    }
    fetchData();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#657780" style="light" />
      <ImageBackground
        source={require("./assets/background.jpg")}
        style={styles.container}
      >
        <SafeAreaView style={styles.screenView}>
          <Header />
          {data ? <CardList data={data} /> : <Text>Loading...</Text>}
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#457B9D",
    justifyContent: "center",
  },
  screenView: {
    flex: 1,
    paddingTop: 20,
  },
});
