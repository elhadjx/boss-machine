import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleWorkRow from './SingleWorkRow';

import { updateWorkThunk, createWorkThunk } from '../store/work';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingNewWork: false,
    }
  }

  toggleEdit = () => {
    this.setState({
      editingNewWork: !this.state.editingNewWork,
    });
  }

  saveNewWork = work => {
    this.props.createWork(work);
    this.setState({
      editingNewWork: false,
    })
  }

  render() {
    const defaultWork = {
      title: 'New Work',
      description: '',
      hours: 0,
      minionId: this.props.selectedMinion.id,
    }
    const workRows = this.props.work.map((work, idx) => {
      return (
        <SingleWorkRow updateWork={this.props.updateWork} work={work} key={work.id} idx={idx} />
      )
    });

    const nextIdx = workRows.length + 1;
  
    return (
      <div id="work-container">
        <div id="work-label" className="label meetings-label">Work</div>
        <table className="work-table">
          <thead>
            <tr>
              <th className="work-x"></th>
              <th className="work-title">Title</th>
              <th className="work-desc">Descr.</th>
              <th className="work-hours">Hrs.</th>
              <th className="work-save"></th>
            </tr>
          </thead>
          <tbody>
            { workRows }
            {
              this.state.editingNewWork
              ? <SingleWorkRow saveNewWork={this.saveNewWork} newWork={true} editing={true} work={defaultWork} idx={nextIdx}/>
              : null
            }
            <tr>
              <td />
              <td />
              <td>
                <div onClick={this.toggleEdit} className="button add-work-button">
                  { this.state.editingNewWork ? 'Cancel' : 'Add Work' }
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapState = ({ work, selectedMinion }) => ({ work, selectedMinion });

const mapDispatch = dispatch => ({
  updateWork: work => {
    dispatch(updateWorkThunk(work));
  },
  createWork: work => {
    dispatch(createWorkThunk(work));
  }
})

export default connect(mapState, mapDispatch)(Work);
