import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

 import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info) => {
    //console.log(info,"eee");
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });

      console.log(data,"sss")
    } catch (error) {
      console.log(error.response.data)
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {},
  extraReducers: (builder) => {
  builder.addCase(admin_login.pending, (state,{payload}) => {
    state.loader = true;
    state.error = null;
  });

  },
});

export default authReducer.reducer;
