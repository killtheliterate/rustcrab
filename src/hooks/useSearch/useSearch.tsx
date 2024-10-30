import { useReducer } from "react";

import { isNotEmpty } from "./helpers";
import { reducer, SET_TERM, CLEAR_TERM } from "./reducer";

// -----------------------------------------------------------------------------

type SearchConfiguration = {
  records: any[];
  searchableFields: string[];
};

export const useSearch = ({
  records,
  searchableFields,
}: SearchConfiguration) => {
  const initialState = {
    filteredRecords: records,
    searchTerm: null,
    searchableFields,
    sourceRecords: records,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setSearchTerm = (term: string | undefined | null) => {
    if (isNotEmpty(term)) {
      dispatch(SET_TERM(term));
    } else {
      dispatch(CLEAR_TERM());
    }
  };

  return {
    records: state.filteredRecords,
    setSearchTerm,
    term: state.searchTerm ?? "",
  };
};
