// const myThunk = (store) => (next) => (action) => {
const myThunk = ({ dispatch }) => (next) => (action) => {
  // debugger
  if (typeof action === 'function') {
    // return action();
    return action(dispatch);
  }

  return next(action);
};

export default myThunk;