import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { Img, ImgWrapper, Button } from './styles'

const DEFAULT_IMAGE = 'https://img.scryfall.com/cards/art_crop/front/1/c/1ca7065e-88c1-44bb-ac68-e6e1df9e0726.jpg?1590879855'

export const PhotoCard = ({ id = '1', name = 'name', likes = '2', cover = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={cover} alt={cover} />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' />{likes} likes!
      </Button>
      <p>{id}</p>
      <p>{name}</p>
    </article>
  )
}
