const ADD_TODO = 'ADD_TODO';


// action creators

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}


// API call



// initialState

const initialState = {};


// reducers

function reducer(state=initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}


// reducer functions



// export api calls or actionCreators

const actionCreators = {

};



// export reducer

export default reducer;