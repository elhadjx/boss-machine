import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { updateIdeaThunk, createIdeaThunk } from '../store/ideas'

import IdeaDescription from './IdeaDescription';
import IdeaEdit from './IdeaEdit';

import { isMillionDollarIdea } from '../utils';

class Idea extends Component {
  constructor(props) {
    super(props);
    let editing = props.newIdea ? true : false;
    this.state = {
      editing: editing,
      idea: props.idea,
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      idea: newProps.idea,
    });
  }

  handleChange = e => {
    this.setState({
      idea: Object.assign(this.state.idea, {
        [e.target.name]: e.target.value,
      }),
    });
  }

  toggleEdit = e => {
    if (this.state.editing) {
      if (this.props.newIdea) {
        this.props.createIdea(this.state.idea);
      } else {
        this.props.updateIdea(this.state.idea);
      }
    }

    this.setState({
      editing: !this.state.editing
    });
  }

  render() {
    const isValid = isMillionDollarIdea(this.state.idea.weeklyRevenue, this.state.idea.numWeeks);
    const buttonText = this.state.editing ? ( isValid ? 'Save' : 'Not A Valid $1000000 Idea!') : 'Edit';
    return (
      <div>
        <div id="single-idea-landing">
          { this.state.editing
            ? <IdeaEdit idea={this.props.idea} handleChange={this.handleChange} />
            : <IdeaDescription idea={this.props.idea} />
          }
          <div id="save-idea"
               className={isValid ? "button save-button" : "button save-button disabled"}
               onClick={isValid ? this.toggleEdit : () => {}} >
            { buttonText }
          </div>
        </div>
        <div className="button back-button">
          <Link to="/ideas">
            <img className="button" src="public/img/arrow.svg" />
          </Link>
        </div>
      </div>
    )
  }
}

const mapState = ({selectedIdea, appState}) =>({
  idea: selectedIdea,
  newIdea: appState.editingNewIdea,
});

const mapDispatch = dispatch => ({
  updateIdea: idea => {
    dispatch(updateIdeaThunk(idea));
  },
  createIdea: idea => {
    dispatch(createIdeaThunk(idea));
  }
});

export default connect(mapState, mapDispatch)(Idea);
