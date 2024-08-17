import axios from 'axios';

import { setSelectedIdea } from './selectedIdea';

const SET_IDEAS = 'SET_IDEAS';
const CREATE_IDEA = 'CREATE_IDEA';
const UPDATE_IDEA = 'UPDATE_IDEA';

// actions

export const setIdeas = ideas => {
  return {
    type: SET_IDEAS,
    ideas
  }
}

export const createIdea = idea => {
  return {
    type: CREATE_IDEA,
    idea
  }
}

export const updateIdea = idea => {
  return {
    type: UPDATE_IDEA,
    idea,
  }
}

// Thunks

export const createIdeaThunk = idea => dispatch => {
  axios.post('http://localhost:4001/api/ideas', idea)
  .then(res => res.data)
  .then(createdIdea => {
    dispatch(createIdea(createdIdea));
  })
  .catch(console.error.bind(console));
}

export const updateIdeaThunk = idea => dispatch => {
  axios.put(`http://localhost:4001/api/ideas/${idea.id}`, idea)
  .then(res => res.data)
  .then(updatedIdea => {
    dispatch(updateIdea(updatedIdea));
    dispatch(setSelectedIdea(updatedIdea));
  });
}


// Reducer

const initial = [];

export default (initialState = initial, action) => {
  switch(action.type) {
    case CREATE_IDEA:
      return [...initialState, action.idea];
    case SET_IDEAS:
      return action.ideas;
    case UPDATE_IDEA:
      const index = initialState.findIndex(el => el.id === action.idea.id);
      if (index === -1) {
        return initialState;
      }
      return [...initialState.slice(0, index), action.idea, ...initialState.slice(index + 1)];
    default:
      return initialState;
  }
}
