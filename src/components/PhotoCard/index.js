import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Article, Img, ImgWrapper, Button } from './styles'

const DEFAULT_IMAGE = 'https://img.scryfall.com/cards/art_crop/front/1/c/1ca7065e-88c1-44bb-ac68-e6e1df9e0726.jpg?1590879855'

export const PhotoCard = ({ id, name = 'name', likes = 0, cover = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={cover} alt={cover} />
              </ImgWrapper>
            </a>
            <Button onClick={() => setLiked(!liked)}>
              <Icon size='32px' />{likes} likes!
            </Button>
            <p>{id}</p>
            <p>{name}</p>
          </>
      }
    </Article>
  )
}
