import React from 'react';
import tw from 'twin.macro';

const CardListFrame = tw.ul`grid md:grid-cols-3 gap-4 my-4`

const CardList = ({ children }) => (
  <CardListFrame>
    { children }
  </CardListFrame>
)

export default CardList