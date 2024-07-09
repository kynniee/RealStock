import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  access_token: '',
}

export const UserSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const {name, email, access_token} = action.payload

      state.name = name || email;
      state.email = email;
      state.access_token = access_token


    },
    resetUser: (state) => {

      state.name ='';
      state.email = '';
      state.access_token = '';


    },

  },
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = UserSlide.actions

export default UserSlide.reducer