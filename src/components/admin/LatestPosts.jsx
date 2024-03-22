"use client"
import Image from 'next/image';
import Link from 'next/link';
import {React, useEffect, useState} from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';
import { RxCross2 } from "react-icons/rx";
import Pagination from '../Pagination';

const LatestPost = ({searchParams}) => {
    const [posts, setPosts] = useState([]);
    const [showModals, setShowModals] = useState(false);
    useEffect(()=>{
        const fetchPosts = async()=>{
            try {
                const res = await fetch("http://localhost:3000/api/posts/latest");
                const data = await res.json();
                if(!res.ok){
                    console.log(data.message);
                }
                else{
                    setPosts(data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();
    },[])
    const handleDelete = async()=>{
        setShowModals(false);
        try {
            const res = await fetch(`/api/user/deleteuser`,{
                method: 'DELETE'
            });
            const data = await res.json();
            // if(res.ok){
            //     setPosts("");
            // }
            // if(!res.ok){
            //     console.log(data.message);
            // }
        } catch (error) {
            console.log(error);
        }
    }
    const length = posts.length
  return (
    <>
        <div className='overflow-x-auto  no-scrollbar'>
        { length > 0 ? (
          <>
              <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
                <thead className='text-xs text-gray-100 uppercase bg-secondary dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Date Created
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
                    {/* <th scope='col' className='px-6 py-3'>
                      View
                    </th> */}
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
                        className='odd:bg-primary even:bg-secondary border-b dark:border-gray-700'
                      >
                        <th
                          scope='row'
                          className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                        >
                          {new Date(currElem.createdAt).toLocaleDateString()}
                        </th>
                        <td className='px-6 py-4'>
                            <Image
                              src={currElem.img}
                              alt='user'
                              width={80}
                              height={80}
                              className='w-10 h-10 object-cover bg-gray-500 rounded-full'
                            />
                        </td>
                        <td className='px-6 py-4'>
                          <span
                            className='font-medium dark:text-gray-400 text-black'
                          >
                            {currElem.title.length < 15
                              ? currElem.title
                              : currElem.title.slice(0, 15) + "..."}
                          </span>
                        </td>
                        <td className='px-6 py-4'>{currElem.catSlug}</td>
                        <td className='px-6 py-4 flex ml-3 mt-3'>
                          <Link className='font-medium text-accent hover:underline' href={`/posts/update-blog/${currElem.slug}`}>Edit</Link>
                        </td>
                        <td className='px-6 py-4'>
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              setShowModals(true);
                            }}
                            href='#'
                            className='font-medium text-red-500  hover:underline'
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
          </>
        ) : (
          <p>There are no posts yet</p>
        )}
        </div>
        {showModals && (
          <div
            className='relative z-10'
            aria-labelledby='modal-title'
            role='dialog'
            aria-modal='true'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

            <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
              <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                  <div className='bg-white dark:bg-[rgb(35,39,42)] px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                    <div className='sm:flex sm:items-start'>
                      <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-200 sm:mx-0 sm:h-10 sm:w-10'>
                        <svg
                          className='h-6 w-6 text-red-600'
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
                          Delete User
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
                  <div className='dark:bg-[rgb(35,39,42)] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                    <button
                      onClick={handleDelete}
                      type='button'
                      className='inline-flex w-full justify-center rounded-md bg-red-600 dark:bg-red-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 dark:hover:bg-red-600/50 sm:ml-3 sm:w-auto'
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setShowModals(false)}
                      type='button'
                      className='mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-gray-400 dark:text-gray-900 hover:dark:bg-gray-500 hover:bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  sm:mt-0 sm:w-auto'
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
  );
};

export default LatestPost;
