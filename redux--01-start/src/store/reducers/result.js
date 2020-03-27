import * as actions from '../actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actions.DELETE_RESULT:
      const updatedArray = state.results.filter(
        result => result.id !== action.resultId
      );
      return {
        ...state,
        results: updatedArray
      };
  }

  return state;
};

export default reducer;
