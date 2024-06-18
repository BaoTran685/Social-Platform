import { createContext, useContext } from "react";

export type SearchContent = {
  isSearchBarVisible: boolean,
  setSearchBarVisible: (c: boolean) => void
}
export const SearchBarContext = createContext<SearchContent>({
    isSearchBarVisible: false,
    setSearchBarVisible: () => {},
});

export const useSearchContext = () => useContext(SearchBarContext)