import React from 'react'
import PersonList from './PersonList'

export default function ShowPersons({showPersons}) {
  return (
    <div>{showPersons.map(person => <PersonList key={person.name} person={person}/>)}</div>
  )
}
