"use client"
import {React, useEffect, useState} from 'react';
import { Tooltip } from "@mui/material";
import Image from 'next/image';
import Link from 'next/link';
import { FaEye } from "react-icons/fa6";
import Pagination from '../Pagination';

const AllPosts = ({page}) => {
    const [data, setData] = useState([]);
    const [showModals, setShowModals] = useState(false);
    useEffect(()=>{
        const fetchUsers = async(page)=>{
            try {
                const res = await fetch(`http://localhost:3000/api/posts?page=${page}`);
                const info = await res.json();
                console.log(info);
                if(!res.ok){
                    console.log(info.message);
                }
                else{
                    setData(info);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchUsers(page);
    },[])
    const {posts,count} = data;
    const POST_PER_PAGE = 6;
    const hasPrev = POST_PER_PAGE*(page-1) > 0;
    const hasNext = POST_PER_PAGE*(page-1) + POST_PER_PAGE < count;
    const length = count;
    const handleDelete = async()=>{
        setShowModals(false);
        try {
            const res = await fetch(`/api/user/deleteuser/`,{
                method: 'DELETE'
            });
            const data = await res.json();
            // if(res.ok){
            //     setUsers(users.filter((user)=> userId !== user._id));
            // }
            if(!res.ok){
                console.log(data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
        <div className=' overflow-x-auto w-full rounded-lg shadow-xl flex-1 whitespace-nowrap no-scrollbar'>
        { length > 0 ? (
          <>
              <table className='text-sm w-full text-leftext-gray-500 dark:text-gray-400'>
              <thead className='text-xs whitespace-normal uppercase bg-secondary text-gray-400'>
                <tr>
                    <th scope='col' className='px-6 py-3'>
                      Date Created
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Post ID
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Post Image
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Post Title
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Category
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Author
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      View
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Edit
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((currElem, idx) =>(
                      <tr
                        key={currElem._id}
                        className='odd:bg-primary even:bg-secondary   border-b dark:border-gray-700'
                      >
                        <th
                          scope='row'
                          className='px-6 py-4 font-medium  whitespace-nowrap text-white'
                        >
                          {new Date(currElem.createdAt).toLocaleDateString()}
                        </th>
                        <td className='px-6 py-4'>
                          <span className='text-gray-400 font-bold text-sm'>ID:</span>{currElem.id}
                        </td>
                        <td className='px-6 py-4'>
                            <Image
                              src={currElem.img}
                              alt='user'
                              width={80}
                              height={80}
                              className='w-10 h-10 object-cover bg-gray-500 rounded-full'
                            />
                        </td>
                        <Tooltip title={currElem.title} placement='top'>
                      <td className='px-6 py-4'>
                        <span className='font-medium dark:text-gray-400 text-black'>
                          {currElem.title.length < 15
                            ? currElem.title
                            : currElem.title.slice(0, 15) + "..."}
                        </span>
                      </td>
                    </Tooltip>
                        <td className='px-6 py-4'>{currElem.catSlug}</td>
                        <td className='px-6 py-4'>{currElem.user.name}</td>
                        <td className='px-6 py-4 flex ml-3 mt-[.6rem]'>
                          <Link className='font-medium text-black bg-white rounded-full hover:underline text-[18px]' href={`/posts/${currElem.slug}`}><FaEye /></Link>
                        </td>
                        <td className='px-6 py-4 ml-3 mt-[.6rem] '>
                          <Link className='font-medium text-accent hover:underline' href={`/posts/update-blog/${currElem.slug}`}>Edit</Link>
                        </td>
                        <td className='px-6 py-4 '>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setShowModals(true);
                            }}
                            href='#'
                            className='font-medium text-red-500 hover:underline'
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
          </>
        ) : (
          <p>There are no users yet</p>
        )}
        </div>
        <Pagination hasPrev={hasPrev} hasNext={hasNext} page={page}/>
        {showModals && (
          <div
            className='relative z-10'
            aria-labelledby='modal-title'
            role='dialog'
            aria-modal='true'
          >
            <div className='fixed inset-0 bg-secondary bg-opacity-75 transition-opacity'></div>

            <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
              <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                <div className='relative transform overflow-hidden rounded-lg bg-primary text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                  <div className=' px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                    <div className='sm:flex sm:items-start'>
                      <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary  sm:mx-0 sm:h-10 sm:w-10'>
                        <svg
                          className='h-6 w-6 text-accent'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                          />
                        </svg>
                      </div>
                      <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                        <h3
                          className='text-base font-semibold leading-6 text-gray-900 dark:text-gray-200'
                          id='modal-title'
                        >
                          Delete Post
                        </h3>
                        <div className='mt-2'>
                          <p className='text-sm dark:text-gray-400 text-gray-500'>
                            Are you sure you want to delete this user? This
                            action cannot be undone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-primary px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                    <button
                      onClick={handleDelete}
                      type='button'
                      className='inline-flex w-full justify-center rounded-md bg-accent px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8ebbffb6] sm:ml-3 sm:w-auto'
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setShowModals(false)}
                      type='button'
                      className='mt-3 inline-flex w-full justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:mt-0 sm:w-auto'
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default AllPosts;
