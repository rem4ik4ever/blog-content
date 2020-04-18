import { UPDATE_FILTERS } from "./actions";

export const initialState = {
  filters: {
    date: "2020-04-20",
    keyword: "Search placeholder",
  },
};

export function reducers(state, action) {
  switch (action.type) {
    case UPDATE_FILTERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    }
    default:
      return {
        ...state,
      };
  }
}
