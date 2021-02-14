import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

// This is our one and only store.
// You can view each piece of state in the example case 'counter' -
// in the redux chrome/FF extension. Gives a better visual view.

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// These are 'types' only for TypeScript,
// not related to the functionality of the store
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
