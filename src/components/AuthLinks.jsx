import Link from "next/link";
import styles from "./component.module.css"
import { usePathname } from "next/navigation";
import * as Icons from "lucide-react";
import Tooltip from '@mui/material/Tooltip';
import { signOut, useSession } from "next-auth/react";

export const AuthLinks = ({open}) => {
  const pathName = usePathname();
  const {status} = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Tooltip title="Login"  disableHoverListener={!open} placement="right">
             <Link href="/login"  className= {`relative flex items-center py-4 px-3 max-sm:pl-[10px] font-medium rounded-md cursor-pointer transition-colors hover:bg-accent text-white `} ><Icons.UserRound /> <span className={` overflow-hidden transition-all ${open ? "w-0" : "w-52 text-[1.1rem] ml-3"}`}>Login</span></Link>
             </Tooltip>
      ) : (
       <div className="flex flex-col">
       <Link href='/write' className={`relative bg-accent flex items-center py-4 px-3 my-2 font-medium rounded-md cursor-pointer transition-all hover:opacity-[.9] text-white ${pathName === "write" && styles.active }`}><Icons.PencilLine /> <span className={` overflow-hidden transition-all ${open ? "w-0" : "w-52 text-[1.1rem] ml-3"}`}>Create</span></Link>
        <span onClick={()=>signOut()}>Logout</span>
       </div>
      )}
    </>
  );
};
