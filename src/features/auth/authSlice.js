import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login as loginAPI } from '../../api/setupAxios';

// Acción asíncrona para manejar el login 
export const login = createAsyncThunk('auth/login', async (values, { rejectWithValue }) => {
  try {
    const response = await loginAPI(values);
    return response;  
  } catch (error) {
    return rejectWithValue(error.response.data); 
  }
});

// El estado inicial de la autenticación
const initialState = {
  token: localStorage.getItem('token') || null, 
  isAuthenticated: !!localStorage.getItem('token'), 
  loading: false, 
  error: null,     
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token'); 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        if(action.payload && action.payload.token) {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem('token', action.payload.token); 
        }else{
          state.token = null;
          state.isAuthenticated = false;
        } 
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error de autenticación';  
      });
  },
});


export const { logout } = authSlice.actions;
export default authSlice.reducer;
