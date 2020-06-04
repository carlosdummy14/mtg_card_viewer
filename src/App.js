import React from 'react'
import { ListOfCategory } from './components/ListOfCategories'
import { GlobalStyles } from './GlobalStyles'
import { PhotoCard } from './components/PhotoCard'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ListOfCategory />
      <PhotoCard />
    </>
  )
}
