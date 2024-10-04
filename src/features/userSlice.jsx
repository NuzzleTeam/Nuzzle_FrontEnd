import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "UserSlice";

/** Create Slice */
export const userSlice = createSlice({
  name: "user",

  /** initialState */
  initialState: {
    // user: null,
    // register: null,
    // isAuthenticated: false,
    // status: 'idle',
    // error: null,
    userId: null,
    familyId: null,
    serialId: null,
    password: null,
    isLogin: null,
    accessToken: null,
    invitationCode: null,
  },

  /** reducers */
  reducers: {
    login: (state, action) => {
      // 여기에 토큰있네
      state.isLogin = true;
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setFamilyId: (state, action) => {
      state.familyId = action.payload;
    },
    setSerialId: (state, action) => {
      state.serialId = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setInvitationCode: (state, action) => {
      state.invitationCode = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const {
  login,
  logout,
  setUserId,
  setFamilyId,
  setInvitationCode,
  setAccessToken,
  setPassword,
  setSerialId,
} = userSlice.actions;
export default userSlice.reducer;

export const selectIsLogin = (state) => state.user.isLogin;
export const selectAccessToken = (state) => state.user.accessToken;
export const selectUserId = (state) => state.user.userId;
export const selectFamilyId = (state) => state.user.familyId;
export const selectInvitaionCode = (state) => state.user.invitationCode;
export const selectSerialId = (state) => state.user.serialId;
export const selectPassword = (state) => state.user.password;

// export const signup = createAsyncThunk(
//     "auth/signup",
//     async ({}, thunkAPI) => {
//         try {

//         } catch(error) {

//         }
//     }
// )

// export const login = createAsyncThunk(
//     "auth/login",
//     async ({username, pw}, thunkAPI) => {
//         try {

//         } catch (error) {

//         }
//     }
// )

// export const logout = createAsyncThunk("auth/logout", async () => {

// })

// reducers: {},
// extraReducers: (builder) => {
//     builder
//         .addCase(login.pending, (state) => {
//             state.status = 'loading';
//         })
//         .addCase(login.fulfilled, (state, action) => {
//             state.user = action.payload;
//             state.isAuthenticated = true;
//             state.status = 'succeeded';
//             state.error = null;
//         })
//         .addCase(login.rejected, (state, action) => {
//             state.status = 'failed';
//             state.error = action.payload;
//         })
//         .addCase(registerUser.fulfilled, (state, action) => {
//             state.register = action.payload;
//         })
//         .addCase(logout.fulfilled, (state) => {
//             state.user = null;
//             state.register = null;
//             state.isAuthenticated = false;
//         });
// },
// login: (state,action) => {
//     state.user = action.payload;
//     state.isAuthenticated = true;
//     // return state;
// },
// logout: (state) => {
//     state.user = null;
//     state.register = null;
//     state.isAuthenticated = false;
//     // return state;
// },
// registerUser: (state, action) => {
//     state.register = action.payload;
// },
// updateUser: (state, action) => {
//     state.user = action.payload;
// }
