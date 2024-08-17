import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { updateMinionThunk, createMinionThunk } from '../store/minions';

import Work from './Work';
import MinionDescription from './MinionDescription';
import MinionEdit from './MinionEdit';

class Minion extends Component {

  constructor(props) {
    super(props);
    let editing = props.newMinion ? true : false;
    this.state = {
      editing: editing,
      minion: props.minion,
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      minion: newProps.minion
    });
  }

  handleChange = e => {
    this.setState({
      minion: Object.assign(this.state.minion, {
        [e.target.name]: e.target.value,
      }),
    });
  }

  toggleEdit = e => {
    if (this.state.editing) {
      if (this.props.newMinion) {
        this.props.createMinion(this.state.minion);
      } else {
        this.props.updateMinion(this.state.minion);
      }
    }
    
    this.setState({
      editing: !this.state.editing
    });
  }

  render() {
    return (
      <div>
        <div id="single-minion-landing">
          <div className="minion-details">
            <div className="label meetings-label">
              { 
                this.props.newMinion
                ? `New Minion`
                : `Minion Id #${this.state.minion.id}`
              }
            </div>
            <div className="minion-description">
              { 
                this.state.editing
                ? <MinionEdit handleChange={this.handleChange} {...this.props.minion} />
                : <MinionDescription {...this.props.minion}/>
              }
            </div>
            <div className="button minion-save-button" onClick={this.toggleEdit}>
              { this.state.editing ? 'Save' : 'Edit' }
            </div>
          </div>
          <div className="work-details">
            <Work />
          </div>
        </div>
        <div className="button back-button">
          <Link to="/minions">
            <img className="button" src="public/img/arrow.svg" />
          </Link>
        </div>
      </div>
    )
  }
}

const mapState = ({selectedMinion, appState}) => ({
  minion: selectedMinion,
  newMinion: appState.editingNewMinion,
});

const mapDispatch = dispatch => ({
  updateMinion: minion => {
    dispatch(updateMinionThunk(minion));
  },
  createMinion: minion => {
    dispatch(createMinionThunk(minion));
  },
});

export default connect(mapState, mapDispatch)(Minion);
