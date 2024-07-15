import React from "react";

const PersonList = ({ person, deleteOne }) => {
  return (
    <li key={person.id}>
      {person.name} {person.number}{" "}
      <button onClick={deleteOne}> delete </button>
    </li>
  );
};

export default PersonList;
