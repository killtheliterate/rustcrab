import { filterRecords } from "./helpers";

// -----------------------------------------------------------------------------

type ReducerState = {
  filteredRecords: any[];
  searchTerm: string | null;
  searchableFields: string[];
  sourceRecords: any[];
};

export type SET_TERM = { type: "SET_TERM"; payload: string };
export const SET_TERM = (payload: string): SET_TERM => {
  return { type: "SET_TERM", payload };
};

export type CLEAR_TERM = { type: "CLEAR_TERM" };
export const CLEAR_TERM = (): CLEAR_TERM => {
  return { type: "CLEAR_TERM" };
};

/**
 * A reducer function to handle search term actions in state management.
 *
 * @param {ReducerState} state - The current state, containing searchable fields, source records, and the current search term.
 * @param {SET_TERM | CLEAR_TERM} action - The action to be processed. It can either set a new search term or clear the current search term.
 * @returns {ReducerState} - The updated state based on the action type.
 */
export const reducer = (
  state: ReducerState,
  action: SET_TERM | CLEAR_TERM,
): ReducerState => {
  switch (action.type) {
    case "SET_TERM":
      return {
        ...state,
        searchTerm: action.payload,
        filteredRecords: filterRecords({
          fields: state.searchableFields,
          records: state.sourceRecords,
          term: action.payload,
        }),
      };

    case "CLEAR_TERM":
      return {
        ...state,
        searchTerm: null,
        filteredRecords: state.sourceRecords,
      };

    default:
      return state;
  }
};
