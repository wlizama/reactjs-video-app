import React from 'react'
import Category from './category'

function Category(props) {
  return (
    <div>
      props.categories.map((item) => {
        return <Category key={item.id} {...item} />
      })
    </div>
  )
}

export default Category; 