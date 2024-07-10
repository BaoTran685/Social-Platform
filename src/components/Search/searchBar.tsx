'use client';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from 'next/navigation'
import { FormEvent, useState , useEffect} from "react";

const SearchBar = ({ query }: { query: string }) => {
  const [searchQuery, setSearchQuery] = useState<string>(query);
  const router = useRouter();
  
  // to search when user is typing
 useEffect(() => {
    if (searchQuery) {
      const encodedSearchQuery = encodeURI(searchQuery); 
      router.push(`/search?q=${encodedSearchQuery}`); 
    }
  }, [searchQuery]); 
  // to search when user press enter, is not really needed since we have search when user is typing
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const encodedSearchQuery = encodeURI(searchQuery);

    router.push(`/search?q=${encodedSearchQuery}`);
  };


  return (
    <form className="relative" onSubmit={handleSearch}>
      <input
        className="peer text--content text-black block w-full bg-[var(--background-grey-color)] rounded-full border-2 border-[#A1A1AA] focus:border-[#1E1E24] transition-colors ease-linear placeholder:text-[#A1A1AA] pl-10 py-2.5 pr-10 appearance-none focus:outline-none"
        placeholder="search for username..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.currentTarget.value)}
        autoComplete='off'
        autoCorrect='off'
        spellCheck='false'
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 size-6 text-[#A1A1AA] peer-focus:text-black transition-colors ease-linear" />
    </form>

  )
}
export default SearchBar;
