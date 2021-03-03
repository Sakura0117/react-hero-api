import React from 'react';
import tw, { styled } from 'twin.macro';

const Button = tw.button`bg-indigo-900 text-white py-2 px-4 mb-8`

const AddCard = ({ addCard }) => (
  <Button
    onClick={addCard}
  >カード追加</Button>
)

export default AddCard