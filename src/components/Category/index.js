import React from 'react'
import { Anchor, Img } from './styles'

const DEFAULT_IMAGE = 'https://img.scryfall.com/cards/art_crop/front/1/c/1ca7065e-88c1-44bb-ac68-e6e1df9e0726.jpg?1590879855'

export const Category = ({ image_uris: { art_crop: cover = DEFAULT_IMAGE }, path }) => {
  // const { art_crop } = image_uris
  // console.log(cover)
  // cover = art_crop
  return (
    <Anchor href={path}>
      <Img src={cover} alt='image' />
      <p>Creature</p>
    </Anchor>
  )
}
