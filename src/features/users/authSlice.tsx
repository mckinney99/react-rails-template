import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../apis/userApi';

const STORAGE_KEY = 'redux_state';
interface PersistedState {
  auth: AuthState;
  // Add other slices' state if needed
}

// loads persisted state from local storage
const loadState = (): PersistedState | undefined => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading state from local storage:', error);
    return undefined;
  }
};

// saves the state to local storage
const saveState = (state: PersistedState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (error) {
    console.error('Error saving state to local storage:', error);
  }
};

export interface AuthState {
  user: User | null;
}

// Load the initial state from local storage or use the default initial state
const initialState: AuthState = loadState()?.auth || {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: AuthState, { payload }) => {
      const { role } = payload;

      state.user = {
        ...payload,
        role: {
          [role]: role,
        },
      };
      // Save the updated state to local storage
      saveState({ auth: state });
    },
    logout: (state: AuthState) => {
      state.user = null;
      // Save the updated state to local storage
      saveState({ auth: state });
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
