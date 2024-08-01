import { RootState } from '../store';

export const selectTickets = (state: RootState) => state.tickets.tickets;
export const selectTicketsLoading = (state: RootState) => state.tickets.loading;
export const selectTicketsError = (state: RootState) => state.tickets.error;
