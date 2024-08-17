import React from 'react';

const MinionDescription = ({name, title, salary, weaknesses}) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Title: {title}</p>
      <p>Salary: {salary}</p>
      <p>Weaknesses: {weaknesses}</p>
    </div>
  )
}

export default MinionDescription;
