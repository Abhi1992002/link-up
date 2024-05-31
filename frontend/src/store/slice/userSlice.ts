import { createSlice } from "@reduxjs/toolkit";

export interface User {
  isMentor: boolean;
  userType: string;
  age: number;
  city: string;
  username: string;
  name: string;
  country: string;
}

interface UsersState {
  users: User[];
  currentUser: {};
}

const initialState: UsersState = {
  users: [],
  currentUser: {}
};


export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUserDetails: ( state, action ) => {
      state.users = action.payload;
    },
    removeUserDetails: ( state ) => {
      state.users  = [];
    },
    addCurrentUser: ( state, action ) => {
      state.currentUser = action.payload;
    },
    removeCurrentUser: ( state ) => {
      state.currentUser  = {};
    },
  }
});


export const { addUserDetails, removeUserDetails, addCurrentUser, removeCurrentUser } = userSlice.actions;

export default userSlice.reducer;