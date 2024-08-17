import React from 'react';
import { connect } from 'react-redux';

import { deleteWorkThunk } from '../store/work';

const SingleWorkRowDescription = ({ work, idx, toggleEdit, deleteWork }) => {
  return (
    <tr>
      <td className="work-x">
        <img className="button" onClick={() => deleteWork(work)} src={`public/img/x_button${idx % 2 === 0 ? '-trans' : ''}.svg`} />
      </td>
      <td className="work-title">{work.title}</td>
      <td className="work-desc">{work.description}</td>
      <td className="work-hours">{work.hours}</td>
      <td className="work-save" onClick={toggleEdit}>
        <div className=" button work-save-button">Edit</div>
      </td>
    </tr>
  )
}

const mapDispatch = dispatch => ({
  deleteWork: work => {
    dispatch(deleteWorkThunk(work));
  }
})

export default connect(null, mapDispatch)(SingleWorkRowDescription);
