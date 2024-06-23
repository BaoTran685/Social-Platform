'use client';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname ();
  const { replace } = useRouter();

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (searchTerm) {
        params.set("query", searchTerm);
    } else {
        params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
};


  return (
    <div className= " justify-center relative flex flex-1 flex-shrink-0">


    <div className="relative w-full max-w-md">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[18px] text-gray-500 peer-focus:text-gray-900" />
        <input
            className="peer block w-full p-2 bg-[#e7e7e76b] rounded-full shadow-md text-lg pl-10 outline-2 placeholder:text-gray-500"
            placeholder="search"
            defaultValue={searchParams.get('query')?.toString()}
            onChange={(e) => {
                handleSearch(e.target.value);
            }} 
        />
    </div>
</div>

  )
}
export default SearchBar;
