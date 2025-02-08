import React from 'react'
import { ContentItemList } from './styles'

export default function ItemList({title, desciption, url}) {
  return (
    <ContentItemList>
      <a href={url} target= "_blank">{title}</a>
      <p>{desciption}</p>
      <hr />
    </ContentItemList>
  )
}
