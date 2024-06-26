import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'


export const login = createAsyncThunk ('user/login', async({email, sifre}) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, sifre)

    const user = userCredential.user;
    const token = user.stsTokenManager.accessToken;

    const userData ={
      token,
      user: user,
    }
  
      return userData
  } catch (error) {
    console.log("userSlice 22 line: ",error)
    throw error
    
  }
})




const initialState ={
    isLoading: false,
    isAuth: false,
    token:null,
    user:null,
    error:null
}
    export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
    setEmail: (state, action) => {
      const loverCaseEmail = action.payload.toLowerCase()
      state.email = loverCaseEmail
    },
    setSifre: (state, action) => {
      state.sifre = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
  extraReducers: (builder) =>{
    builder
    .addCase(login.pending, (state)=>{
      state.isLoading = true;
      state.isAuth = false

    })
    .addCase(login.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(login.rejected, (state, action)=>{
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.error.message;

    })
  }
})

export const { setEmail, setSifre, setIsLoading } = userSlice.actions;
export default userSlice.reducer;
