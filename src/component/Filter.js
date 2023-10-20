import React from 'react'

export default function Filter({updateFilter}) {
    const filterName = (event) => {
        updateFilter(event.target.value)
      }
    return (
    <div>
        filter show with <input onChange={filterName}></input>
    </div>
  )
}
