import React from "react";
import { useQuery } from "react-query";
import { FlatList, View } from "react-native";
import { Button } from "react-native-paper";

import ScreenContainer from "../components/ScreenContainer";
import { StarshipCard } from "../components/StarshipCard";

import { UseStarships } from "../hooks/UseStarships";

interface ShipProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

interface RenderItemProps {
  item: ShipProps;
}

const renderItem = (props: RenderItemProps) => {
  const ship = props.item;

  return(
    <View>
    <StarshipCard name={""} model={""} manufacturer={""} cost_in_credits={""} />
  </View>
)
};

export const FeedScreen = () => {
  const { isLoading, isError, data, refetch } = useQuery("starships");

  if (isLoading) {
    return <ScreenContainer title="Loading…" />;
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
console.log(data);

  if (data.results === undefined) {
    return <ScreenContainer title="Not Found" />;
  }

  return (
    <ScreenContainer title="Starships" withFooter>
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={(ship) => ship.model}
      />
    </ScreenContainer>
  );
};

function fetchStarships(
  arg0: string,
  fetchStarships: any
): { isLoading: any; isError: any; data: any; refetch: any } {
  throw new Error("Function not implemented.");
}
