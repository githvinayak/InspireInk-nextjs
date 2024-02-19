import Menu from "@/components/Menu";
import Comments from "@/components/comments/Comments";
import pic from "@/images/p1.jpeg";
import Image from "next/image";

const SinglePage = () => {
  return (
    <>
      <div className=" mt-14">
        <div className="flex max-lg:flex-col items-center gap-[50px]">
          <div className="flex-[1]">
            <h1 className=" text-[54px] text-wrap max-xl:text-[48px] max-lg:text-[40px] max-sm:text-[36px] max-xsmall:text-[26px]  font-bold mb-[50px] ">The standard Lorem Ipsum passage, used since the 1500s</h1>
            <div className="flex items-center gap-[20px] "> 
              <div className=" w-[50px] h-[50px] relative ">
                <Image src={pic} fill className="rounded-[50%] object-cover" />
              </div>
              <div className="flex flex-col gap-[5px] text-gray-700">
                <span className=" text-[20px] font-medium">John Doe</span>
                <span>01.01.2024</span>
              </div>
            </div>
          </div>
          <div  className="flex-[1] h-[350px] relative ">
            <Image src={pic} className=' object-cover h-[350px] max-xsmall:h-[220px] max-xsmall:w-[270px]' />
          </div>
        </div>
        <div className="flex gap-[50px]">
          <div className="flex-[5] max-xl:flex-[3.5] mt-14">
          <div>
            <p className=" text-[20px] max-sm:text-[15px] max-lg:text-[17px] max-xsmall:text-[13px] text-justify font-light mb-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
            <p className=" text-[20px] max-sm:text-[15px] max-lg:text-[17px] max-xsmall:text-[13px] text-justify font-light mb-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
            <p className=" text-[20px] max-sm:text-[15px] max-lg:text-[17px] max-xsmall:text-[13px] text-justify font-light mb-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
            <p className=" text-[20px] max-sm:text-[15px] max-lg:text-[17px] max-xsmall:text-[13px] text-justify font-light mb-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
          </div>
          <div>
            <Comments/>
          </div>
          </div>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default SinglePage;
