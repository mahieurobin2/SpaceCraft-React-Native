import React from 'react';
import { Card } from 'react-native-paper';

interface StarshipCardProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

export function StarshipCard({
  name,
  model,
  manufacturer,
  cost_in_credits,
}: StarshipCardProps) {
  return <Card>{name}</Card>;
         <Card>{model}</Card>;
         <Card>{manufacturer}</Card>;
         <Card>{cost_in_credits}</Card>;
         
}