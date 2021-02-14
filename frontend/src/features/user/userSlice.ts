import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string | null;
  token: string | null;
  loading: boolean;
}

interface UserPayload {
  name: string | null;
  token: string | null;
}

const initialState: UserState = {
  name: null,
  token: null,
  loading: false,
};

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    loading: (state) => {
      return { ...state, loading: !state.loading };
    },
    login: (state, action: PayloadAction<UserPayload>) => {
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
      };
    },
    logout: (state) => {
      return { ...state, token: null, name: null };
    },
  },
});

// These values are created by the 'toolkit'
// The toolkit here is creating reducers for us
// and simplifying actions
export const { loading, login, logout } = userSlice.actions;
export default userSlice.reducer;
