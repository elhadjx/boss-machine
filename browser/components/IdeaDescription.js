import React from 'react';
import { formatCash } from '../utils';

const IdeaDescription = ({ idea }) => {
  const weeklyRevenue = formatCash(idea.weeklyRevenue);
  const expectedReturn = formatCash(idea.weeklyRevenue * idea.numWeeks);
  return (
    <div className="idea-edit">
      <div className="label meetings-label">
        { idea.name }
      </div>
      <div className="idea-description">
        { idea.description }
      </div>
      <div className="idea-income">
        <div className="idea-detail" id="idea-weekly-revenue">
          <div className="single-idea-label">Revenue/week</div>
          <div className="idea-detail-display">{weeklyRevenue}</div>
        </div>
        <div className="idea-detail" id="idea-weeks">
          <div className="single-idea-label"># of Weeks</div>
          <div className="idea-detail-display">{idea.numWeeks}</div>
        </div>
        <div className="idea-detail" id="idea-return">
          <div className="single-idea-label">Expected Return</div>
          <div className="idea-detail-display">{ expectedReturn }</div>
        </div>
      </div>
    </div>
  )
}

export default IdeaDescription;
