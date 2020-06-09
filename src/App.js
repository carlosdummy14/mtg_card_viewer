import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { ListOfCategory } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <ListOfCategory />
      <ListOfPhotoCards />
    </>
  )
}
