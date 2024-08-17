import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { cancelMeetingsThunk } from '../store/meetings';

import AllMeetings from './AllMeetings';

const Home = ({ cancelMeetings }) => {
  return (
    <div id="landing-page">
      <div id="launch-buttons">
        <Link to="/minions">
          <div id="minions-launch" className="button launch-button">
            <img className="button launch-icon" src="public/img/minion_icon_home.svg" alt="" />
            <div className="button label launch-label">
              MINIONS.exe
            </div>
          </div>
        </Link>
        <Link to="/ideas">
          <div id="ideas-launch" className="button launch-button">
            <img className="button launch-icon" src="public/img/minion_icon_money.svg" alt="" />
            <div className="button label launch-label">
              MILLION $ IDEAS.exe
            </div>
          </div>
        </Link>
      </div>
      <AllMeetings />
      <div id="meetings-cancel" className="button" onClick={cancelMeetings}>
        Cancel All
      </div>
    </div>
  )
};

const mapDispatch = dispatch => ({
  cancelMeetings: () => {
    dispatch(cancelMeetingsThunk());
  }
})

export default connect(null, mapDispatch)(Home);
