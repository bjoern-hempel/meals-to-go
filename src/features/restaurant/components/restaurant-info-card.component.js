import React from "react";
import styled from "styled-components/native";
import { Image, Text, View } from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const CardStyled = styled(Card)`
  font-family: ${(props) => props.theme.fonts.body};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const CardTitleStyled = styled(Card.Title)`
  font-family: ${(props) => props.theme.fonts.body};
`;

const CardContentStyled = styled(Card.Content)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const CardCoverStyled = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardContentTitleStyled = styled(Title)`
  font-family: ${(props) => props.theme.fonts.body};
`;

const CardContentParagraphStyled = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
`;

const InfoStyled = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const TitleStyled = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const AddressStyled = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RatingOpenSectionStyled = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const RatingSectionStyled = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const RatingIconStyled = styled(SvgXml)``;

const OpenSectionStyled = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const OpenIconStyled = styled(SvgXml)`
  flex-direction: row;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "A supernice Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    iconCard = (props) => {
      return <Avatar.Icon {...props} icon="wifi" />;
    },
    photos = [
      "https://twelvepics.com/build/images/calendar/01.800.jpg",
      "https://twelvepics.com/build/images/calendar/02.800.jpg",
    ],
    address = "Königstr. 3, 01097, Dresden",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <CardStyled elevation={5}>
      {/* <CardTitleStyled title={name} subtitle="Restaurant" left={icon} /> */}
      {/* <CardContentStyled>
        <CardContentTitleStyled>{name}</CardContentTitleStyled>
        <CardContentParagraphStyled>{address}</CardContentParagraphStyled>
      </CardContentStyled> */}
      <CardCoverStyled key={name} source={{ uri: photos[0] }} />

      <InfoStyled>
        <TitleStyled>{name}</TitleStyled>
        <RatingOpenSectionStyled>
          <RatingSectionStyled>
            {ratingArray.map((value, index) => (
              <RatingIconStyled
                key={"star-" + index}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </RatingSectionStyled>
          <OpenSectionStyled>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image
                style={{ paddingLeft: 16, width: 15, height: 15 }}
                source={{ uri: icon }}
              />
            </Spacer>
          </OpenSectionStyled>
        </RatingOpenSectionStyled>
        <AddressStyled>{address}</AddressStyled>
      </InfoStyled>
    </CardStyled>
  );
};
