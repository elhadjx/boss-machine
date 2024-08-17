const SET_NEW_IDEA_ON = 'SET_NEW_IDEA_ON';
const SET_NEW_MINION_ON = 'SET_NEW_MINION_ON';
const SET_NEW_WORK_ON = 'SET_NEW_WORK_ON';
const RESET_EDITING_STATE = 'RESET_STATE';

// actions

export const setIdeaEditing = () => {
  return {
    type: SET_NEW_IDEA_ON,
  }
}

export const setMinionEditing = () => {
  return {
    type: SET_NEW_MINION_ON,
  }
}

export const setWorkEditing = () => {
  return {
    type: SET_NEW_WORK_ON,
  }
}

export const resetEditingState = () => {
  return {
    type: RESET_EDITING_STATE,
  }
}

const initial = {
  editingNewIdea: false,
  editingNewMinion: false,
  editingNewWork: false,
}

export default (initialState = initial, action) => {
  switch(action.type) {
    case SET_NEW_IDEA_ON:
      return Object.assign({}, initialState, {
        editingNewIdea: true,
      });
    case SET_NEW_MINION_ON:
      return Object.assign({}, initialState, {
        editingNewMinion: true,
      });
    case SET_NEW_WORK_ON:
      return Object.assign({}, initialState, {
        editingNewWork: true,
      });
    case RESET_EDITING_STATE:
      return Object.assign({}, initial);
    default:
      return initialState;
  }
}
