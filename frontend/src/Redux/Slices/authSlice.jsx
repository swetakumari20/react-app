import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, signupApi } from "../Services/Services";

const initialState = {
  userSignUp: null,
  loginInfo:null,
  status: "idle", // Track loading state which is "idle" if the any request is not pending
  error: null,
};

//signup
export const signUpUserAsync = createAsyncThunk(    //In this function to handle the signup action
  "auth/signup",
  async (userSignUp, { rejectWithValue }) => { //rejectwithvalue handle the error state 
    try {
      const response = await signupApi(userSignUp);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Signup failed");
    }
  }
);

//login
export const logInUserAsync = createAsyncThunk(
  "/user/login",
  async (loginInfo, { rejectWithValue }) => {
    try {
      const response = await loginApi(loginInfo);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Signup failed");
    }
  }
);

export const authSlice = createSlice({  //In this slice to handle the authentication state 
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userSignUp = action.payload;
      })
      .addCase(signUpUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(logInUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logInUserAsync.fulfilled, (state, action) => {
        state.status = "idle"
         state.loginInfo = action.payload;
      })
      .addCase(logInUserAsync.rejected, (state, action) => {
        state.status = "failed"
           state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
