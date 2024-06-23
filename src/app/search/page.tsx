
import SearchBar from '@/components/Search/searchBar';
import UserList from '@/components/Search/userList';


interface Params {
  searchParams: { [key: string]: string | string[] | undefined }
}

const SearchPage = async ({ searchParams }: Params) => {
  const query = searchParams.q as string || '';
  console.log(query);
  return (
    <section>
      <SearchBar query={query} />
      <UserList query={query} />

    </section>

  )
}

export default SearchPage;