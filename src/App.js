import { useState,useEffect } from 'react'
import PersonsForm from './component/PersonsForm'
import Filter from './component/Filter'
import ShowPersons from './component/ShowPersons'
import noteServeice from './server/note'

const App = () => {
  const [persons, setPersons] = useState([])
  const [showPersons, setShowPersons] = useState(persons)

  useEffect(()=>{
    noteServeice
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
        setShowPersons(initialNotes)
      })
  },[])

  const updateFilter = (filter) =>{
    const newShowPerson = persons.filter(person => person.name.includes(filter))
    setShowPersons(newShowPerson)
  }

  const createPerson = (newInput) => {
    noteServeice
    .create(newInput)
    .then(newList => {
      setPersons(persons.concat(newList))
      setShowPersons(persons.concat(newList))
    })
  }

  const deletePerson = person => {
    console.log(person)
    noteServeice
    .deletePerson(person)
    .then(() => {
      const newPersonList = noteServeice.getAll().then(response => {
        setPersons(response)
        setShowPersons(response)
      })
    })
  }

  const updatePerson = (person) => {
    noteServeice.update(person)
    .then(response => {
      setPersons(persons.map(p=> p.id === response.id ? response : p))
      setShowPersons(persons.map(p=> p.id === response.id ? response : p))
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter updateFilter={updateFilter}/>
      <h3>add a new:</h3>
      <PersonsForm persons={persons} createPerson={createPerson} updatePerson={(person) => updatePerson(person)}/>
      <h2>Numbers</h2>
      <ShowPersons showPersons={showPersons} deletePerson={(id) => {deletePerson(id)}}/>
    </div>
  )
}

export default App