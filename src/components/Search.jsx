"use client";
import { IoIosSearch } from "react-icons/io";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = ({ open }) => {
    const searchParams = useSearchParams();

    const pathName = "http://localhost:3000/posts"

    const { replace } = useRouter();

    const handleSearch = (query) => {
        console.log('query', query);

        const params = new URLSearchParams(searchParams);

        if (query) {
            params.set('query', query);
        } else {
            params.delete('query');
        }

        replace(`${pathName}?${params.toString()}`) //http://localhost:3000/blogs?query=science

    }
  return (
    <>
      <form>
        <div className='relative flex items-center py-4 px-3  bg-primary font-medium rounded-md cursor-pointer text-sm pl-10  my-2 focus-within:text-white'>
          <span className='absolute inset-y-0 left-0 flex  items-center pl-2'>
            <button
              type='submit'
              className='p-1 focus:outline-none focus:shadow-outline'
            >
            <IoIosSearch className="w-8 h-8 font-bold text-accent"/>
            </button>
          </span>
          <input
            type='search'
            onChange={(e)=>{handleSearch(e.target.value)}}
            name='query'
            placeholder='Search...'
            autoComplete='off'
            className={` overflow-hidden bg-inherit  focus:outline-none  transition-all ${ open ? "w-0" : "w-60 text-[1.1rem] ml-3"}`}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
