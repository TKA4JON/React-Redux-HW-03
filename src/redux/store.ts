import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './Tickets/reducer';
import AirlinesReducer from './Airlines/reducer'
import transferReducer from './Transfers/reducer'


export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    checkboxes: AirlinesReducer,
    transfers: transferReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


