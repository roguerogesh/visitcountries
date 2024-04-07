import React from 'react'
import {ListItem, Image} from './styledComponents'

const VisitedCountries = props => {
  const {countryDetails, onRemove} = props
  const {id, imageUrl, name} = countryDetails

  const handleRemove = () => {
    onRemove(id)
  }

  return (
    <ListItem>
      <Image src={imageUrl} alt="thumbnail" />
      <p>{name}</p>
      <button onClick={handleRemove} type="button">
        Remove
      </button>
    </ListItem>
  )
}

export default VisitedCountries
