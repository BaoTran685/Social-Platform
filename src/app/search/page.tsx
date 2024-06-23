
import SearchBar from '@/components/Search/searchBar';
import UserList from '@/components/Search/userList';

interface SearchParams {
  query?: string;
}

interface Props {
  searchParams?: SearchParams;
}

 const SearchPage= async ({ searchParams }: Props) => { 
  const query = searchParams?.query || "";       
  return (
    <section>
     <div className="flex justify-center w-full "><SearchBar/></div>
      <UserList query={query}/>
    
    </section>
      
  )
}

export default SearchPage;