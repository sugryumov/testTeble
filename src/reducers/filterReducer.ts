import { EFilterActionTypes } from '../constants';

interface filterAction {
  type: string;
  payload: boolean;
}

const initialState = {
  isActive: false,
};

export const filterReducer = (state = initialState, action: filterAction) => {
  switch (action.type) {
    case EFilterActionTypes.IS_ACTIVE_USER:
      return {
        isActive: action.payload,
      };

    default:
      return state;
  }
};
