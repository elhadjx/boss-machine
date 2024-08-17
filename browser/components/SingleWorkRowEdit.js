import React from 'react';

const SingleWorkRowEdit = ({ work, idx, handleChange, toggleEdit }) => {
  return (
    <tr>
      <td />
      <td><input name="title" className="work-title-edit" onChange={handleChange} value={work.title}/></td>
      <td><input name="description" className="work-desc-edit" onChange={handleChange} value={work.description}/></td>
      <td><input name="hours" className="work-hours-edit" onChange={handleChange} value={work.hours}/></td>
      <td className="work-save" onClick={toggleEdit}><div className=" button work-save-button">Save</div></td>
    </tr>
  )
}

export default SingleWorkRowEdit;
