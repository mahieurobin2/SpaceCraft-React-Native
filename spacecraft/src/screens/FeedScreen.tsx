import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View } from "react-native";
import { FlatList } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';

import { data } from "../../api/data";

const App = () => {
  const renderItem = ({ item }) => {
    console.log({ item });
    return (
        <Card>
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>

        <Paragraph>{item.name} </Paragraph>
        <Paragraph>{item.model} </Paragraph>
        <Paragraph> {item.manufacturer} </Paragraph>.
        <Paragraph> {item.cost_in_credits} </Paragraph>
        <Paragraph> {item.length} </Paragraph>
        <Paragraph> {item.max_atmosphering_screen} </Paragraph>
        <Paragraph> {item.crew} </Paragraph>
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
