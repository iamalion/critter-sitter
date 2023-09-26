import React from 'react'

function NameInput({ name, setName }) {

  return (
    <>
    <label htmlFor="name">First up, what is your pet's name?</label>
    <input
      type="text"
      placeholder="Fluffy"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    </>
  )
}

export default NameInput