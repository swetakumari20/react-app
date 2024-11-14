// src/features/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userListApi } from '../Services/userServices';

const initialState = {
  users:[],
  status: 'idle', // "idle" indicates no request is in progress
  error: null,
};

// Async thunk for fetching user list
export const fetchUsers = createAsyncThunk('/user/list', async () => {
  const response = await userListApi();
  console.log(response, "res")
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
