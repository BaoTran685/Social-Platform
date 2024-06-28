
import SearchBar from '@/components/Search/searchBar';
import UserList from '@/components/Search/userList';
import { getUsers } from '@/app/actions/data/get-data/getUser';
import { Search_DataFromServer } from '@/components/Types/Search/search';


interface Params {
  searchParams: { [key: string]: string | string[] | undefined }
}

const SearchPage = async ({ searchParams }: Params) => {
  const query = searchParams.q as string || '';
  console.log({ query });

  if (query) {
    
    const data: Search_DataFromServer = await getUsers({ query });
    const { message, content, ok } = data;
    const { users } = content;
    if (ok && users) {
      return (
        <section>
          <SearchBar query={query} />
          <UserList users={users} />
        </section>
      )
    }
    // handle error
  }
  // handle when nothing is searched
  return (
    <section>
      <SearchBar query={query} />
    </section>

  )
}

export default SearchPage;