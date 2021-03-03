
import React from 'react';
import { jsx } from '@emotion/core'
import tw, { styled } from 'twin.macro';

const ListItem = tw.section`bg-indigo-900`

const CardItem = styled(ListItem)(({ color, hasError }) => [
  color === 'yellow' && tw`bg-yellow-900`,
  hasError ? tw`bg-pink-900` : ``
])

const HeroTitle = tw.h2`text-white uppercase text-xl`
const HeroContents = tw.section`py-8 px-8`
const HeroDescription = tw.h2`py-4 text-white text-sm`
const HeroThumbnail = tw.img`h-64 object-cover w-full`

const HeroProfile = ({ title, description, img }) => (
  <CardItem>
    <HeroThumbnail src={img} style={{ height: '400px' }} />
    <HeroContents>
      <HeroTitle>{ title }</HeroTitle>
      <HeroDescription>{ description }</HeroDescription>
    </HeroContents>
  </CardItem>
)

export default HeroProfile