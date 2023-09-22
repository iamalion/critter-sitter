import React from 'react'

function NameInput({ name, setName }) {
  return (
    <input
      type="text"
      placeholder="Fluffy"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  )
}

export default NameInput