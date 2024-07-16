import axios from "axios";

const baseUrl = "http://13.211.222.77:8000/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (person) => {
  const request = axios.post(baseUrl, person);
  return request.then((response) => response.data);
};

const deletePerson = (person) => {
  const request = axios
    .delete(`${baseUrl}/${person.id}`, { data: { person } })
    .catch((error) => console.log("front end error is", error));
  return request.then((response) => response.data);
};

const update = (person) => {
  console.log("update:", person);
  const request = axios
    .put(`${baseUrl}/${person.id}`, person)
    .catch((error) => {
      console.log(error);
    });
  return request.then((response) => response.data);
};

export default { getAll, create, deletePerson, update };
