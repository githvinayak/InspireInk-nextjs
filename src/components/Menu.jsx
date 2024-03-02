import Link from "next/link";
import Image from "next/image";
import CategoryList from "./CategoryList";

const Menu = () => {
  const categories = [
    {
      categoryName:"Technology",
      path:"/blog?cat=technology",
    },
    {
      categoryName:"Fashion",
      path:"/blog?cat=fashion",
    },
    {
      categoryName:"Food",
      path:"/blog?cat=food",
    },
    {
      categoryName:"Travel",
      path:"/blog?cat=travel",
    },
  ]
  return (
    <>
      <div className='flex-[2] max-lg:hidden mt-14'>
        <h2 className=' text-gray-400 text-[16px] font-semibold  capitalize'>what's hot</h2>
        <h1 className='mb-[40px] text-[45px] max-2xsmall:text-[23px] max-xsmall:text-[25px] max-sm:text-[27px]  max-md:text-[30px] font-bold max-xl:text-[40px] text-white max-lg:text-[35px]  '>Most Popular</h1>
        <div className=" flex flex-col gap-5">
          {
            categories.map((category)=>(
              <Link key={category.path} className="flex hover:px-4 hover:py-3 items-center hover:bg-secondary transition-all hover:rounded-xl gap-[18px] " href={category.path}>
            <div className="flex-[1] ">
              <Image src="/p1.jpeg" alt='' width={80} height={80} className='aspect-[1/1] p-2 rounded-[50%] bg-primary border-[3px] border-solid border-accent ' />
            </div>
            <div className="flex-[4] flex flex-col gap-[5px]  ">
              <p className="py-[3px] rounded-2xl px-[8px] text-[12px] text-white bg-accent  w-[max-content] ">{category.categoryName}</p>
              <h3 className="text-[16px] max-xl:text-[13px] font-[500] text-white "> Lorem Ipsum is simply dummy text of the printing .</h3>
              <div className=" text-[12px]">
                <span className="text-accent">John doe</span>
                <span className="text-gray-400"> - 11.02.23</span>
              </div>
            </div>
          </Link>
            ))
          }
        </div>
        <CategoryList withtImage= {false} />
      </div>
    </>
  );
};

export default Menu;
