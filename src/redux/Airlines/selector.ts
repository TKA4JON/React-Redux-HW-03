import { RootState } from '../store';

export const selectCheckboxOptions = (state: RootState) => state.checkboxes.options;


export const selectAirlineFilter = (state: RootState) => {
    const selectedOptions = state.checkboxes.filter.checkboxes;
    const allOptions = state.checkboxes.options.map(option => option.value);
  
    if (selectedOptions.length === 0 || selectedOptions.length === allOptions.length) {
      return [];
    }
  
    return selectedOptions;
  };