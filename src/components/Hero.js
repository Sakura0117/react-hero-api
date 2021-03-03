
import React from 'react';
import { jsx } from '@emotion/core'
import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom'

const ListItem = tw.li`flex flex-col justify-center items-center bg-indigo-900 h-64 relative overflow-y-auto overflow-x-auto p-1`

const CardItem = styled(ListItem)(({ color, hasError }) => [
  color === 'yellow' && tw`bg-yellow-900`,
  hasError ? tw`bg-pink-900` : ``
])

const HeroTitle = tw.h2`text-white uppercase text-2xl`
const HeroDescription = tw.p`py-4 text-white text-base`
const HeroModified = tw.p `text-xs py-4 text-white`
const HeroContents = tw.div`absolute bg-gray-900 h-64 w-full bg-opacity-75 p-4`
const HeroThumbnail = tw.img`h-64 object-cover w-full`
const Heroname = tw.h2`text-base text-white`
const Heroseries = tw.p`text-base text-white`
const HerocollectionURI = tw.p`text-base text-white`
const HeropageCount = tw.p`text-base text-white`

const Hero = ({ id, title, description, img, modified, name, available, collectionURI, pageCount }) => (
  <CardItem>
    <HeroContents>
      <HeroTitle>
        <Link to={`/character/${id}`}>{ name }</Link>
      </HeroTitle>
      <HeroModified>{ modified }</HeroModified>
      <HeropageCount>{ pageCount }</HeropageCount>
      <Heroname>{ name }</Heroname>
      <HerocollectionURI>{ collectionURI }</HerocollectionURI>
      <HeroDescription>{ description }</HeroDescription>
    </HeroContents>
    <HeroThumbnail src={ img } />
  </CardItem>
)

export default Hero