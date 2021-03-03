
import React from 'react';
import { jsx } from '@emotion/core'
import tw, { styled } from 'twin.macro';

const ListItem = tw.section`bg-indigo-900`

const CardItem = styled(ListItem)(({ color, hasError }) => [
  color === 'yellow' && tw`bg-yellow-900`,
  hasError ? tw`bg-pink-900` : ``
])

const ComicTitle = tw.h2`text-white uppercase text-xl`
const ComicContents = tw.section`py-8 px-8`
const ComicDescription = tw.h2`py-4 text-white text-sm`
const ComicThumbnail = tw.img`h-64 object-cover w-full`

const ComicProfile = ({ title, description, img }) => (
  <CardItem>
    <ComicThumbnail src={img} style={{ height: '400px' }} />
    <ComicContents>
      <ComicTitle>{ title }</ComicTitle>
      <ComicDescription>{ description }</ComicDescription>
    </ComicContents>
  </CardItem>
)

export default ComicProfile