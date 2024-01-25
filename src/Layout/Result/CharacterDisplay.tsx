import React from 'react'

type Props = {
  name: string,
  imgUrl: string,
}

const CharacterDisplay = ({name, imgUrl}: Props) => {
  return (
    <div className='characterDisplay'>
        <div className="imageContainer">
        <img src={imgUrl} className='characterImage' />
        </div>
        <div className="characterName">{name}</div>
    </div>
  )
}

export default CharacterDisplay