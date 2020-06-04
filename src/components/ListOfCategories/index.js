import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { data } from '../../db.json'

export const ListOfCategory = () => {
  // console.log(category)
  return (
    <List>
      {
        data.map(category =>
          <Item key={category.id}><Category {...category} />
          </Item>
        )
      }
    </List>
  )
}
