import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const StyledTitle = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "A supernice Restaurant",
    icon = (props) => {
      return <Avatar.Icon {...props} icon="wifi" />;
    },
    photos = [
      "https://twelvepics.com/build/images/calendar/01.800.jpg",
      "https://twelvepics.com/build/images/calendar/02.800.jpg",
    ],
    address = "Königstr. 3, 01097, Dresden",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Title title={name} subtitle="Restaurant" left={icon} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <StyledTitle>{name}</StyledTitle>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {},
  cover: {},
});
