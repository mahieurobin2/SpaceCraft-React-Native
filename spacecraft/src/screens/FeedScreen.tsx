import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View } from "react-native";
import { FlatList } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

import { data } from "../../api/data";
import ScreenContainer from "../components/ScreenContainer";
import { useStarships } from "../hooks/UseStarships";
import { NetworkProvider } from 'react-native-offline';


const App = () => {
  const { isLoading, isError, data, refetch } = useStarships();
  if (isLoading) {
  return <ScreenContainer title="Loading…"  />;
}

if (isError) {
  return (
    <ScreenContainer title="Error 😕">
      <Button onPress={refetch} mode="outlined">
        Refetch
      </Button>
    </ScreenContainer>
  );
}

  const renderItem = ({ item }) => {
    console.log({ item });
    return (
      <Card>
        <Card.Content>
        <Card.Cover source={{ uri: 'data:image/jpeg;base64,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' }} />
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
          <Paragraph>{item.name} </Paragraph>
          <Paragraph>{item.model} </Paragraph>
          <Paragraph> {item.manufacturer} </Paragraph>.
          <Paragraph> {item.cost_in_credits} </Paragraph>
          <Paragraph> {item.length} </Paragraph>
          <Paragraph> {item.max_atmosphering_screen} </Paragraph>
          <Paragraph> {item.crew}. </Paragraph>
          <Paragraph> {item.passengers} </Paragraph>
          <Paragraph> {item.cargo_capacity} </Paragraph>
          <Paragraph> {item.consumables} </Paragraph>
          <Paragraph> {item.hyperdrive_rating} </Paragraph>
          <Paragraph> {item.starship_class} </Paragraph>
        </Card.Content>
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={(props) => props.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default App;
function useMemes(): { isLoading: any; isError: any; data: any; } {
  throw new Error("Function not implemented.");
}

