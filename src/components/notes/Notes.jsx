"use client";

import useSWR from "swr";
import Note from "./Note";
import Skeleton from "./Skeleton";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};

const Notes = () => {
  //const { status } = useSession();

  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/notes`,
    fetcher
  );
console.log(data);
  return (
      <div className='flex flex-col gap-4 no-scrollbar overflow-y-auto w-full'>
        {isLoading
          ? <Skeleton/>
          : data?.map((item, idx) => (<Note post={item} key={idx} />))
          }
      </div>
  );
};

export default Notes;
