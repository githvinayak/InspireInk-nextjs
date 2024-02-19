import Menu from "@/components/Menu";
import CardList from "@/components/CardList";

const page = () => {
  return (
    <>
      <div className="mt-14">
        <h1 className="text-center font-extrabold text-[28px]">Technology Blogs</h1>
        <div className='flex gap-[50px] '>
            <CardList   />
            <Menu />
          </div>
      </div>
    </>
  )
}

export default page