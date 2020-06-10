import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
// import { data } from '../../db.json'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://api.scryfall.com/cards ')
      .then(res => res.json())
      .then(response => {
        setCategories(response.data)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategory = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 199
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    // <List className={fixed ? 'fixed' : ''}>
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category =>
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
