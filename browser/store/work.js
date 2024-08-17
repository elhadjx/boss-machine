import axios from 'axios';

const SET_WORK = 'SET_WORK';
const CREATE_WORK = 'CREATE_WORK';
const UPDATE_WORK = 'UPDATE_WORK';
const DELETE_WORK = 'DELETE_WORK';

// Actions

export const setWork = allWork => {
  return {
    type: SET_WORK,
    allWork,
  }
}

export const addWork = work => {
  return {
    type: CREATE_WORK,
    work,
  }
}

export const updateWork = work => {
  return {
    type: UPDATE_WORK,
    work,
  }
}

export const deleteWork = workId => {
  return {
    type: DELETE_WORK,
    workId,
  }
}

// Thunks

export const createWorkThunk = work => dispatch => {
  axios.post(`http://localhost:4001/api/minions/${work.minionId}/work`, work)
  .then(res => res.data)
  .then(createdWork => {
    dispatch(addWork(createdWork));
  })
  .catch(console.error.bind(console));
}

export const updateWorkThunk = work => dispatch => {
  axios.put(`http://localhost:4001/api/minions/${work.minionId}/work/${work.id}`, work)
  .then(res => res.data)
  .then(updatedWork => {
    dispatch(updateWork(updatedWork));
  })
  .catch(console.error.bind(console));
}

export const deleteWorkThunk = work => dispatch => {
  axios.delete(`http://localhost:4001/api/minions/${work.minionId}/work/${work.id}`)
  .then(() => {
    dispatch(deleteWork(work.id));
  })
  .catch(console.error.bind(console));
}

// Reducer

export const initial = [];

export default (initialState = initial, action) => {
  switch(action.type) {
    case CREATE_WORK:
      return [...initialState, action.work];
    case SET_WORK:
      return action.allWork;
    case UPDATE_WORK:
      const index = initialState.findIndex(el => el.id === action.work.id);
      if (index === -1) {
        return initialState;
      }
      return [...initialState.slice(0, index), action.work, ...initialState.slice(index + 1)];
    case DELETE_WORK:
      const deleteIndex = initialState.findIndex(el => el.id === action.workId);
      if (deleteIndex === -1) {
        return initialState;
      }
      return [...initialState.slice(0, deleteIndex), ...initialState.slice(deleteIndex + 1)];
    default:
      return initialState;
  }
}
