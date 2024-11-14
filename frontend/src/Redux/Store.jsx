import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/userSlice'
import authReducer from './Slices/authSlice';
export const store = configureStore({
  reducer:{
    auth:authReducer,
    user:userReducer

  }
});