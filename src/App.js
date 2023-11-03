import { useState,useEffect } from 'react'
import PersonsForm from './component/PersonsForm'
import Filter from './component/Filter'
import ShowPersons from './component/ShowPersons'
import noteServeice from './server/note'
import './index.css'
import Notification from './component/Notification'
import ErrorMessage from './component/ErrorMessage'

const App = () => {
  const [persons, setPersons] = useState([])
  const [showPersons, setShowPersons] = useState(persons)
  const [statusMessgae, setStatusMessage] = useState(null)
  const [errorMessage,setErrorMessage] = useState(null)

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
      setStatusMessage(`Added ${newInput.name}`)
      setTimeout(()=>{
        setStatusMessage(null)
      },5000)
    })
  }

  const deletePerson = person => {
    console.log(person)
    noteServeice
    .deletePerson(person)
    .then(() => {
      noteServeice.getAll().then(response => {
        setPersons(response)
        setShowPersons(response)
      })
    })
  }

  const updatePerson = (person) => {
    noteServeice.update(person)
    .catch(error=>{
      setErrorMessage(`Information of ${person.name} has already been removed from server`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000);
    })

    noteServeice.getAll()
    .then(initialNotes => {
      setPersons(initialNotes)
      setShowPersons(initialNotes)
    })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={statusMessgae}/>
      <ErrorMessage message={errorMessage}/>
      <Filter updateFilter={updateFilter}/>
      <h3>add a new:</h3>
      <PersonsForm persons={persons} createPerson={createPerson} updatePerson={(person) => updatePerson(person)}/>
      <h2>Numbers</h2>
      <ShowPersons showPersons={showPersons} deletePerson={(id) => {deletePerson(id)}}/>
    </div>
  )
}

export default App