import React from 'react'
import {  CommonInput } from '../../styles/Container.style.js'

function NameInput({ name, setName }) {

  return (
    <>
      <CommonInput
        type="text"
        placeholder="Fluffy"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
  
    </>
  )
}

export default NameInput