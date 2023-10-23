import React from 'react'
import PersonList from './PersonList'

export default function ShowPersons({showPersons,deletePerson}) {
  const deleteOne = person => {
    if(window.confirm(`Delete ${person.name} ?`)){
      console.log('step 1')
      deletePerson(person)
    }
  }

  return (
    <div>{showPersons.map(person => <PersonList key={person.id} person={person} deleteOne={()=>deleteOne(person)}/>)}</div>
  )
}
