
import React from 'react';
import { jsx } from '@emotion/core'
import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom'

const ListItem = tw.li`flex flex-col justify-center items-center bg-indigo-900 h-64 relative overflow-y-auto overflow-x-auto p-1`

const CardItem = styled(ListItem)(({ color, hasError }) => [
  color === 'yellow' && tw`bg-yellow-900`,
  hasError ? tw`bg-pink-900` : ``
])

const ComicTitle = tw.h2`text-white uppercase text-2xl`
const ComicDescription = tw.p`py-4 text-white text-base`
const ComicModified = tw.p `text-xs py-4 text-white`
const ComicContents = tw.div`absolute bg-gray-900 h-64 w-full bg-opacity-75 p-4`
const ComicThumbnail = tw.img`h-64 object-cover w-full`
const Comicname = tw.h2`text-base text-white`
const Comicseries = tw.p`text-base text-white`
const ComiccollectionURI = tw.p`text-base text-white`
const ComicpageCount = tw.p`text-base text-white`

const Comic = ({ id, title, description, img, modified, name, available, collectionURI, pageCount }) => (
  <CardItem>
    <ComicContents>
      <ComicTitle>
        <Link to={`/comics/${id}`}>{ name }</Link>
      </ComicTitle>
      <ComicModified>{ modified }</ComicModified>
      <ComicpageCount>{ pageCount }</ComicpageCount>
      <Comicname>{ name }</Comicname>
      <ComiccollectionURI>{ collectionURI }</ComiccollectionURI>
      <ComicDescription>{ description }</ComicDescription>
    </ComicContents>
    <ComicThumbnail src={ img } />
  </CardItem>
)

export default Comic