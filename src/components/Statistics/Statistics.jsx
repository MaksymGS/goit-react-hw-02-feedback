import React from 'react';
import { List, ListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  console.log(positivePercentage);
  return (
    <List>
      <ListItem>Good: {good}</ListItem>
      <ListItem>Neutral: {neutral}</ListItem>
      <ListItem>Bad: {bad}</ListItem>
      <ListItem>Total: {total}</ListItem>
      <ListItem>Positive feedback: {positivePercentage}%</ListItem>
    </List>
  );
};
