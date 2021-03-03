
import React from 'react';
import { jsx } from '@emotion/core'
import tw from 'twin.macro';

const ComicListFrame = tw.ul`grid md:grid-cols-3 gap-4 my-4`

const ComicList = ({ children }) => (
  <ComicListFrame>
    { children }
  </ComicListFrame>
)

export default ComicList