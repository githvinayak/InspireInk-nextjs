import Menu from "@/components/menu/Menu";
import CardList from "@/components/CardList";

const BlogPage =async ({searchParams}) => {
console.log(searchParams);
  const page = parseInt(searchParams.page) || 1;
  const {cat } = searchParams;

  return (
    <>
      <div className="mt-14">
        <h1 className="text-center capitalize font-extrabold text-[28px]">{cat} Blogs</h1>
        <div className='flex gap-[50px] '>
            <CardList page={page} cat={cat}  />
            <Menu />
          </div>
      </div>
    </>
  )
}

export default BlogPage