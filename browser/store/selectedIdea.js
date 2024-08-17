const CLEAR_SELECTED_IDEA = 'CLEAR_SELECTED_IDEA';
const SET_IDEA = 'SET_IDEA';

export const setSelectedIdea = idea => {
  return {
    type: SET_IDEA,
    idea
  }
}

const initial = {
  id: '',
  name: '',
  weeklyRevenue: 0,
  numWeeks: 0,
}

export default (initialState = initial, action) => {
  switch(action.type) {
    case CLEAR_SELECTED_IDEA:
      return {};
    case SET_IDEA:
      return action.idea;
    default:
      return initialState;
  }
}
