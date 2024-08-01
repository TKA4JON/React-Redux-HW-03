import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ticket, TicketsState } from '../../types/types';
import { fetchTickets } from './action';

const initialState: TicketsState = {
  tickets: [],
  loading: false,
  error: null,
  };
  
  const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
      sortByPrice: (state) => {
        state.tickets.sort((i, j) => i.price - j.price);
      },
      sortByDuration: (state) => {
        state.tickets.sort ((x, y) => x.duration - y.duration);
      },
      sortByTransfer: (state) => {
        state.tickets.sort((a, b) => a.connectionAmount - b.connectionAmount);
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchTickets.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchTickets.fulfilled, (state, action: PayloadAction<Ticket[]>) => {
          state.loading = false;
          state.tickets = action.payload;
          state.tickets.sort((a, b) => a.price - b.price);
        })
        .addCase(fetchTickets.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });
  
  export const { sortByPrice, sortByDuration, sortByTransfer } = ticketsSlice.actions;
  export default ticketsSlice.reducer;

  