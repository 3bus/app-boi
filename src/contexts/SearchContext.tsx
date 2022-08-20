import React, { createContext, useContext, useState } from "react";

type SearchContext = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

const INITIAL = {
  searchTerm: "",
  setSearchTerm: () => {},
};

const useSearchContextContext = (): SearchContext => {
  const [searchTerm, setSearchTerm] = useState<SearchContext["searchTerm"]>(
    INITIAL.searchTerm
  );

  const setSearchTermFn = (st: string) => setSearchTerm(st);

  return {
    searchTerm,
    setSearchTerm: setSearchTermFn,
  };
};

const SearchContext = createContext<SearchContext>(INITIAL);
export const SearchContextContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <SearchContext.Provider value={useSearchContextContext()}>
    {children}
  </SearchContext.Provider>
);

export const useSearchTerm = () => {
  return useContext(SearchContext);
};
