import { TransferState } from "../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TransferState = {
    options: [
        { value: '0', label: 'Без пересадок', checked: true },
        { value: '1', label: '1 пересадка', checked: false },
        { value: '2', label: '2 пересадки', checked: false },
        { value: '3', label: '3 и более пересадок', checked: false },
      ],
      filter: ['0']
    };
    const transferSlice = createSlice({
        name: 'transfers',
        initialState,
        reducers: {
          toggleTransferOption: (state, action: PayloadAction<string>) => {
            const option = state.options.find(opt => opt.value === action.payload);
            if (option) {
              option.checked = !option.checked;
              state.filter = state.options.filter(opt => opt.checked).map(opt => opt.value);
            }
          }
        }
      });
      
      export const { toggleTransferOption } = transferSlice.actions;
      export default transferSlice.reducer;