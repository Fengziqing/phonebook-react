import { useState,useEffect } from 'react'
import PersonsForm from './component/PersonsForm'
import Filter from './component/Filter'
import ShowPersons from './component/ShowPersons'
import axios from 'axios'

const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ])
  const [persons, setPersons] = useState([])
  const [showPersons, setShowPersons] = useState(persons)

  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setShowPersons(response.data)
      })
  },[])

  const updateFilter = (filter) =>{
    const newShowPerson = persons.filter(person => person.name.includes(filter))
    setShowPersons(newShowPerson)
  }

  const updatePersonList = (newInput) => {
    const newList = persons.concat(newInput)
    setPersons(newList)
    setShowPersons(newList)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter updateFilter={updateFilter}/>
      <h3>add a new:</h3>
      <PersonsForm persons={persons} updatePersonList={updatePersonList}/>
      <h2>Numbers</h2>
      <ShowPersons showPersons={showPersons}/>
    </div>
  )
}

export default App