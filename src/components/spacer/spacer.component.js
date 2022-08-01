import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}: ${value}`;
};

const ViewStyled = styled(View)`
  ${({ propsPosition, propsSize, theme }) =>
    getVariant(propsPosition, propsSize, theme)};
`;

export const Spacer = (props) => {
  return (
    <ViewStyled propsSize={props.size} propsPosition={props.position}>
      {props.children}
    </ViewStyled>
  );
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
