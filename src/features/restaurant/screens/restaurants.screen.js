import React from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SaveAreaStyled = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchContainerStyled = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainerStyled = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SaveAreaStyled>
    <SearchContainerStyled>
      <Searchbar />
    </SearchContainerStyled>
    <RestaurantListContainerStyled>
      <RestaurantInfoCard />
    </RestaurantListContainerStyled>
  </SaveAreaStyled>
);
