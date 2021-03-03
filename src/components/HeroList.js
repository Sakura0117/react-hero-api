
import React from 'react';
import { jsx } from '@emotion/core'
import tw from 'twin.macro';

const HeroListFrame = tw.ul`grid md:grid-cols-3 gap-4 my-4`

const HeroList = ({ children }) => (
  <HeroListFrame>
    { children }
  </HeroListFrame>
)

export default HeroList