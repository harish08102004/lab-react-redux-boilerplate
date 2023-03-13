import { createSlice } from "@reduxjs/toolkit";

export const LikeReducer = createSlice({
  name: 'likes',
  initialState:{
    value:0
  },
  reducers:{
    increment: (state) =>{
      state.value += 1
    },
    decrement: (state) =>{
      state.value -=1
    }
  }
})

export const {increment,decrement} = LikeReducer.actions;
export default LikeReducer.reducer;