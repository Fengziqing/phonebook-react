import React , {useState} from 'react'

export default function PersonsForm({persons,updatePersonList}) {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    
    const updateList = (event) => {
        event.preventDefault()
        if(persons.find((item) => item.name === newName)){
          window.alert(`${newName} is already added to phonebook`)
          return
        }
        if(newNumber === ''){
          window.alert('number could not be empty')
          return
        }
        const newInput = {
            name: newName,
            number: newNumber,
            id: persons.length+1
        }
        updatePersonList(newInput)
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
