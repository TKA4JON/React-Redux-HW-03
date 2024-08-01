import { RootState } from '../store';

export const selectTransferOptions = (state: RootState) => state.transfers.options;
/*export const selectTransferFilter = (state: RootState) => state.transfers.filter;*/



export const selectTransferFilter = (state: RootState) => {
  const selectedOptions = state.transfers.filter;
  const allOptions = state.transfers.options.map(option => option.value);

  if (selectedOptions.length === 0 || selectedOptions.length === allOptions.length) {
    return [];
  }

  return selectedOptions;
};

