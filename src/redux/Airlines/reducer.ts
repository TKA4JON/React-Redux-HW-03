import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AirlinesState } from '../../types/types';

const initialState: AirlinesState = {
  options: [
    { value: 'Victory', label: 'Победа', checked: true },
    { value: 'RedWings', label: 'Red Wings', checked: true },
    { value: 'S7', label: 'S7 Airlines', checked: true }
  ],
  filter: {
    checkboxes: ['Victory', 'RedWings', 'S7']
  }
};

const AirlinescheckboxSlice = createSlice({
  name: 'checkboxes',
  initialState,
  reducers: {
    toggleOption: (state, action: PayloadAction<string>) => {
      const option = state.options.find(opt => opt.value === action.payload);
      if (option) {
        option.checked = !option.checked;
        state.filter.checkboxes = state.options.filter(opt => opt.checked).map(opt => opt.value);
      }
    }
  }
});

export const { toggleOption } = AirlinescheckboxSlice.actions;
export default AirlinescheckboxSlice.reducer;