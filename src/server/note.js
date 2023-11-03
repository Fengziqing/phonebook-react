import axios from "axios"

const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    console.log(request)
    return request.then(response => response.data)
}

const create = person => {
    const request = axios.post(baseUrl,person)
    return request.then(response => response.data)
}

const deletePerson = person => {
    const request = axios.delete(`${baseUrl}/${person.id}`,{data:{person}})
    .then(console.log('delete success'))
    .catch(error => {console.log(error)})
    return request.then(response => response.data)
}

const update = person => {
    console.log(person)
    const request = axios.put(`${baseUrl}/${person.id}`,person)
    return request.then(response => response.data)
}

export default { getAll,create,deletePerson,update }