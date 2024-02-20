import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import  authReducer  from './features/users/authSlice';
import { LoginAction, LogoutAction, User } from './apis/userApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
});

export const login = (user: User): LoginAction => {
  return {type: 'LOGIN', payload: user}
}

export const logout = (): LogoutAction => {
  return {type: 'LOGOUT'} 
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
