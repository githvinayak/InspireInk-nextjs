
import Featured from "@/components/Featured";
import CategoryList from "@/components/CategoryList";
import Menu from "@/components/Menu";
import CardList from "@/components/CardList";

const Home = () => {
  return (
    <>
        <div className=' max-w-screen-2xl'>
          <Featured />
          <CategoryList withImage={true}/>
          <div className='flex  gap-[50px] '>
            <CardList   />
            <Menu />
          </div>
        </div>
    </>
  );
};

export default Home;