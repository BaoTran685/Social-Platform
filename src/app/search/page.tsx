'use client'
import HomePage from '../home/page';
import {useEffect} from 'react';
import { useSearchContext } from '@/components/Context/searchContext';

const SearchPage= () => {
  const {  setSearchBarVisible } = useSearchContext();

  useEffect(() => {
    // Set showSearchBar to true when the search page mounts
    setSearchBarVisible(true);
    return () => {
      // Reset showSearchBar when leaving the search page
      setSearchBarVisible(false);
    };
  }, []);

  return (
    <HomePage/>
  );
};

export default SearchPage;
