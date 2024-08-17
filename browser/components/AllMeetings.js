import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meeting from './Meeting';

import { createMeetingThunk } from '../store/meetings';

class AllMeetings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeoutId: null,
      timeoutTime: 5000,
    }
  }

  componentDidMount() {
    let timeoutId = null;
    const addMeeting = () => {
      this.props.createMeeting();
      timeoutId = window.setTimeout(addMeeting, this.state.timeoutTime);
      this.setState({
        timeoutId,
        timeoutTime: Math.random() * 10000 + 3000,
      });
    }
    addMeeting();
  }

  componentWillUnmount() {
    window.clearTimeout(this.state.timeoutId);
  }

  render() {
    const allMeetings = this.props.meetings.map(meeting => {
      return <Meeting key={meeting.date} day={meeting.day} time={meeting.time} note={meeting.note} />
    });
  
    return (
      <div id="meetings-landing">
        <div className="label meetings-label">
          Meetings
        </div>
        <div id="meetings-table">
          <table>
            <thead>
              <tr>
                <th id="th-time">Time</th>
                <th id="th-location">Date</th>
                <th id="th-note">Note</th>
              </tr>
            </thead>
            <tbody>
              { allMeetings }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapState = ({ meetings }) => ({ meetings });

const mapDispatch = dispatch => ({
  createMeeting: () => {
    dispatch(createMeetingThunk());
  }
});

export default connect(mapState, mapDispatch)(AllMeetings);

