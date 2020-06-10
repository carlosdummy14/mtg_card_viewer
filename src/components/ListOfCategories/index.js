import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
// import { data } from '../../db.json'

export const ListOfCategory = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    window.fetch('https://api.scryfall.com/cards ')
      .then(res => res.json())
      .then(response => {
        setCategories(response.data)
      })
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 199
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category =>
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        )
      }
    </List>

  )

  // console.log(categories)
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
