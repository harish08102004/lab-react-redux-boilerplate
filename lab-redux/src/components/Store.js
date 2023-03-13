import { configureStore } from "@reduxjs/toolkit";
import LikeReducer from "./LikeReducer";

export default configureStore({
  reducer:{
    likes:LikeReducer
  }
})