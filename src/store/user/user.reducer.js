// import { USER_ACTION_TYPES } from './user.types';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice=createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers:{
    setCurrentUser(state, action){      //this is short hand of setCurrentUser: ()=>{}
    state.currentUser= action.payload; //this looks like we are mutating the state but toolkit uses immer
  }                                     //under the hood to create new state everytime.
  }
})

export const {setCurrentUser}=userSlice.actions;

export const userReducer=userSlice.reducer;

// export const userReducerOld = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };

/* we work with the concept of immutability when working with reducers this helps us to catch the
state changes efficiently and reder/rerender based on that, If we pass the old state redux will do
checking by refernce and that will lead to skip re rendering even though the state properties
changes but the refernce doesn't change therefore we pass a new state always like this
{...state, currentUser: payload} So that every time new state is passed and re-rendering happens
Now a question will arise then this will trigger unnecessary rerendering even if the values are
same everytime new state is passed it will re-render. But no that's work of useSelector it 
compares old state value with new state value and olny re-render if it detects any change */