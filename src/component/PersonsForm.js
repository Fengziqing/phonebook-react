import React , {useState} from 'react'

export default function PersonsForm({ persons,createPerson,updatePerson }) {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    
    const updateList = (event) => {
        event.preventDefault()
        if(newNumber === ''){
          window.alert('number could not be empty')
          return
        }
        const result = persons.find((item) => item.name === newName)
        if(result){
          const newNumberPerson = { ...result, number: newNumber }
          updatePerson(newNumberPerson)
        }else{
          const newInput = {
              name: newName,
              number: newNumber
          }
          createPerson(newInput)
        }
        setNewName('')
        setNewNumber('')
      }
    
    const nameChanged = (event) => {
        setNewName(event.target.value)
    }
    
    const numberChanged = (event) => {
        setNewNumber(event.target.value)
    }
    
    return (
    <div>
        <form onSubmit={updateList}>
        <div>
          name: <input value={newName} onChange={nameChanged}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={numberChanged}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
   )
}
