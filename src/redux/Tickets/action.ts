import { Ticket } from "../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTickets = createAsyncThunk<Ticket[], void>(
    'tickets/fetchTickets',
    async (_, { rejectWithValue }): Promise<Ticket[]> => {
      try {
        const response = await fetch('http://localhost:5000/tickets');
        if (!response.ok) {
          throw new Error('Сервер не отвечает');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Failed to fetch tickets:', error);
        return rejectWithValue('Невозможно загрузить билеты');
      }
    }
  );

  