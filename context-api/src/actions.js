export const UPDATE_FILTERS = "UPDATE_FILTERS";

export default function getActions(dispatch) {
  const updateFilters = (payload) => {
    dispatch({ type: UPDATE_FILTERS, payload });
  };

  return {
    updateFilters,
  };
}
