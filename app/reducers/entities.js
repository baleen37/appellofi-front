const initialState = {
  tracks: {},
};

const entities = (state = initialState, action) => {
  if (action.entities) {
    return Object.assign({}, state, action.entities);
  }
  return state;
};

export default entities;
