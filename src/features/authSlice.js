import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLogin, getRegister } from "../api/auth";

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try{
        const response = await getLogin(userData);
        if(response.data.token){
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    }
    catch(error){
        const errorMessage = error.response?.data?.error || 'Login failed';
        return rejectWithValue(errorMessage);
    }
}
);

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData, { rejectWithValue }) => { 
        try{
            const response = await getRegister(userData);
            return response.data;
        }
        catch(error){
            const errorMessage = error.response?.data?.error || 'Registration failed';
            return rejectWithValue(errorMessage);
        }
    }
);         

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
        token:localStorage.getItem('token') || null,
        loading:false,
        error:null,
    },
    reducers:{
        logout:(state)=>{
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    }  ,
    
    
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })

        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        })

        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })


        .addCase(registerUser.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })

        .addCase(registerUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        })

        .addCase(registerUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;