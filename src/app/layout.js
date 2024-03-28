import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang='en'>
      <body className={inter.className}>
      <AuthProvider>
          <main className='flex flex-col h-screen'>
              <div className='flex flex-1 overflow-hidden'>
                <div className='flex'>
                 <Sidebar/>
                </div>
                <article className='flex flex-1 flex-col  max-w-screen-2xl mx-auto px-[60px] max-wide:w-[1366px] max-xl:w-[1024px] max-lg:w-[768px] max-lg:px-[40px] max-md:w-[640px] max-sm:w-[475px] max-sm:px-[20px] max-xsmall:px-[5px]'>
                  <div className=' flex flex-col flex-1 overflow-y-auto no-scrollbar'>
                    {children}
                    <div className='flex sticky top-[100vh] '>
                    <Footer className="" />
                  </div>
                  </div>  
                </article>
              </div>
            </main>
        </AuthProvider>
      </body>
    </html>
  );
}
