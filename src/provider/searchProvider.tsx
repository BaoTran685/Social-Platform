'use client'
import { SearchBarContext } from '@/components/Context/searchContext';
import { ReactNode, useState } from 'react';



export default function SearchProvider({ children }: { children: ReactNode }) {
  const [isSearchBarVisible,setSearchBarVisible] = useState(false);

  return (
    <SearchBarContext.Provider value={{isSearchBarVisible,setSearchBarVisible}}>
      {children}
    </SearchBarContext.Provider>
  )
}