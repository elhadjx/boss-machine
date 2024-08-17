import React from 'react';

const MinionEdit = ({name, title, salary, weaknesses, handleChange, submit}) => {
  return (
    <div className="minion-edit">
      <div className="minion-edit-single-rows">
        <div className="minion-edit-row">
          <div className="minion-edit-label">Name:</div>
          <input name="name" type="text" value={name} onChange={handleChange}></input>
        </div>
        <div className="minion-edit-row">
          <div className="minion-edit-label">Title:</div>
          <input name="title" type="text" value={title} onChange={handleChange}></input>        
        </div>
        <div className="minion-edit-row">
          <div className="minion-edit-label">Salary:</div>
          <input name="salary" type="text" value={salary}  onChange={handleChange}></input>
        </div>
      </div>
      <div>
        Weaknesses:
      </div>
      <div>
        <textarea className="minion-input-textarea" name="weaknesses" value={weaknesses} onChange={handleChange} />
      </div>
    </div>
  )
}

export default MinionEdit;
