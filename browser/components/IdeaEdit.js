import React from 'react';
import { formatCash } from '../utils';

const IdeaEdit = ({ idea, handleChange }) => {
  const expectedReturn = formatCash(idea.weeklyRevenue * idea.numWeeks);
  return (
    <div className="idea-edit">
      <div className="meetings-label">
        <input name="name" className="idea-name-input" value={idea.name} onChange={handleChange} />
      </div>
      <textarea name="description" className="idea-description" value={ idea.description } onChange={handleChange} />
      <div className="idea-income">
        <div className="idea-detail">
          <div className="single-idea-label">Revenue/week</div>
          <input name="weeklyRevenue" className="idea-detail-input" value={idea.weeklyRevenue} onChange={handleChange} />
        </div>
        <div className="idea-detail">
          <div className="single-idea-label"># of Weeks</div>
          <input name="numWeeks" className="idea-detail-input" value={idea.numWeeks} onChange={handleChange} />
        </div>
        <div className="idea-detail">
          <div className="single-idea-label">Expected Return</div>
          <div className="idea-detail-display">{ expectedReturn }</div>
        </div>
      </div>
    </div>
  )
}

export default IdeaEdit;
