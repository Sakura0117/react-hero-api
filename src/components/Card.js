import React from 'react';
import tw, { styled } from 'twin.macro';

const ListItem = tw.li`flex flex-col justify-center items-center bg-indigo-900 h-64`
const YellowListItem = tw(ListItem)`bg-yellow-900`
const AlertableListItem = styled(ListItem)(({ hasError }) => [
  hasError ? tw`bg-pink-900` : ``
])
const CardName = tw.h2`text-white uppercase text-xl`
const CardDescription = tw.h2`py-4 text-white text-sm`
const Cardhobby = tw.h2`py-4 text-white text-sm`


const Card = ({ name, age, hobby }) => (
  <ListItem>
    <CardName>{ name }</CardName>
    <CardDescription>{ age }</CardDescription>
    <Cardhobby>{ hobby }</Cardhobby>
  </ListItem>
)

export const YellowCard = ({ name, age, hobby }) => (
  <YellowListItem>
    <CardName>{ name }</CardName>
    <CardDescription>{ age }</CardDescription>
    <Cardhobby>{ hobby }</Cardhobby>
  </YellowListItem>
)

export const AlertableCard = ({ name, age, hobby }) => (
  <AlertableListItem hasError>
    <CardName>{ name }</CardName>
    <CardDescription>{ age }</CardDescription>
    <CardDescription>{ hobby }</CardDescription>
  </AlertableListItem>
)

export default Card