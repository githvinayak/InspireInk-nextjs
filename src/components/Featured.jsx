import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero3 from "@/images/hero3.jpg";
import hero1 from "@/images/hero1.jpg";
import hero2 from "@/images/hero2.jpg";
import insight from "@/images/visionary.png";
import * as Icons from "react-icons/go";

const Featured = () => {
  return (
    <>
      <div className='flex max-xl:mb-24 flex-col h-screen box-border gap-8 max-sm:gap-0 py-8'>
        <div className='flex max-sm:flex-col max-sm:items-start flex-[1] max-sm:gap-0 gap-8'>
          <div className=' flex-[6]  '>
            <h1 className='bg-accent font-bold text-[50px] max-2xsmall:text-[27px] max-xsmall:text-[30] max-sm:text-[36px] max-md:text-[40px] max-lg:text-[42px] max-xl:text-[47px] mb-2 px-4 rounded-md table'>
              Explore The
            </h1>
            <h1 className='bg-accent font-bold text-[46px] max-2xsmall:text-[23px] max-xsmall:text-[26] max-sm:text-[30px] max-md:text-[35px] max-lg:text-[40px] max-xl:text-[45px] mb-2 px-4 rounded-md table'>
              World Through
            </h1>
            <div className='flex gap-2'>
              <h1 className='bg-accent font-bold text-[44px] max-2xsmall:text-[20px] max-xsmall:text-[23] max-sm:text-[26px]  max-md:text-[30px] max-lg:text-[38px] max-xl:text-[43px] mb-2 px-4 rounded-md table'>
                Unleashed Insight
              </h1>
              <Image
                src={insight}
                width={60}
                height={60}
                className='w-[5rem] h-[5rem] max-md:w-[3.5rem]  max-md:h-[3.5rem] max-sm:w-[3rem]  max-sm:h-[3rem] max-lg:h-[4rem] max-lg:w-[4rem] bg-accent rounded-full object-contain object-center'
                alt='pic'
              />
            </div>
          </div>
          <div className='flex justify-start  p-8 flex-col flex-[2]  items-end max-lg:flex-col  max-lg:items-start  max-md:flex-col '>
            <p className=' tracking-[0.03em] max-sm:w-2/3 text-justify  text-[12px] text-text leading-4'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
            <Link
              href='#'
              className='flex px-2 py-1 rounded-[34px] bg-secondary text-white justify-center items-center gap-8 max-lg:gap-4'
            >
              <span className=' text-[16px] max-lg:text-[10px] px-2 max-xl:text-xs  items-start  tracking-[0.03em] max-xl:leading-4 max-lg:left-3  leading-6'>
                Explore Now
              </span>
              <span className=' flex items-center bg-white  p-3 justify-center rounded-full w-[2.5rem] max-lg:w-[1.5rem] h-[2.5rem] max-lg:h-[1.5rem]  max-lg:rouded '>
                <Icons.GoArrowRight className='w-10 text-[28px] text-primary h-10' />
              </span>
            </Link>
          </div>
        </div>
        <div className='flex flex-[2]  flex-row max-lg:gap-2 gap-6'>
          <div className='flex  box-border gap-2 text-text flex-col max-md:hidden flex-[2]'>
            <div className='flex flex-col py-2 gap-2 max-md:hidden'>
              <h1 className='font-bold max-lg:text-[17px] text-[22px] '>
                Lorem Ipsum :
                <span className='font-semibold italic'>
                  is simply dummy text of the printing
                </span>
              </h1>
              <p className='text-[16px] max-lg:text-[13px] text-justify'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>
            </div>
            <div class='flex items-center'>
              <div class='flex-1 border-t-2 border-gray-200'></div>
              <span class='px-3 text-[11px] text-text'>24-02-2024</span>
              <div class='flex-1 border-t-2 border-gray-200'></div>
            </div>
            <div className='relative'>
              <Image
                className='rounded-2xl h-[200px]  object-cover object-center'
                src={hero2}
                alt=''
              />
              <div className='absolute top-2 right-2 flex items-center bg-white  p-3 justify-center rounded-full w-12 h-12 '>
                <Icons.GoArrowUpRight className='w-10 text-primary h-10' />
              </div>
            </div>
          </div>
          <hr className="hidden max-lg:flex rotate-90"/>
          <div className='flex max-2xsmalljustify-center max-2xsmall:items-start max-2xsmall:tracking-wide max-lg:hidden max-md:flex max-xsmall:h-auto max-xsmall:w-[30%] border-r-2 border-l-2 max-md:border-0 box-border px-6 max-sm:px-0 max-md:px-2 py-2 text-text gap-3 flex-col flex-[3]'>
          <div class='hidden max-xsmall:w-full max-md:flex items-center'>
              <div class='flex-1 border-t-2 border-gray-200'></div>
              <span class='px-3 text-[11px] text-text'>24-02-2024</span>
              <div class='flex-1 border-t-2 border-gray-200'></div>
            </div>
            <div>
              <h1 className='font-bold text-[24px] max-md:text-[20px] max-sm:text-[18px] max-xsmall:text-[16px]   '>
                Lorem ipsum is placeholder text <br/> commonly used in the graphic.
              </h1>
            </div>
            <div className="max-sm:h-auto flex  max-sm:w-full max-xsmall:w-3/4 ">
              <Image
                className='rounded-2xl h-[200px] grayscale object-cover object-center'
                src={hero1}
                alt=''
              />
            </div>
            <div className="max-xsmall:h-auto  max-xsmall:w-full">
              <p className='text-[16px] max-md:text-[14px] max-sm:text-[12px] max-xsmall:text-[11px]  '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut
                enim ad minim veniam, quisnostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class='hidden max-md:flex items-center'>
              <div class='flex-1 border-t-2 border-gray-200'></div>
              <span class='px-3 text-[11px] text-text'>24-02-2024</span>
              <div class='flex-1 border-t-2 border-gray-200'></div>
            </div>
          </div>
          <div className='flex box-border gap-2 text-text flex-col max-md:hidden flex-[2]'>
            <div className='flex flex-col py-2 gap-2 '>
              <h1 className='font-bold text-[22px] max-lg:text-[18px] '>
                Lorem Ipsum :
                <span className='font-semibold italic'>
                  is simply dummy text of the printing
                </span>
              </h1>
              <p className='text-[16px] max-lg:text-[13px] text-justify'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>
            </div>
            <div class='flex items-center'>
              <div class='flex-1 border-t-2 border-gray-200'></div>
              <span class='px-3 text-[11px] text-text'>24-02-2024</span>
              <div class='flex-1 border-t-2 border-gray-200'></div>
            </div>
            <div className='relative'>
              <Image
                className='rounded-2xl sepia h-[200px] object-cover object-center'
                src={hero3}
                alt=''
              />
              <div className='absolute top-2 right-2 flex items-center bg-white  p-3 justify-center rounded-full w-12 h-12 '>
                <Icons.GoArrowUpRight className='w-10 text-primary h-10' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
