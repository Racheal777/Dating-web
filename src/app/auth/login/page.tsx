import AppFooter from "@/app/components/AppFooter";
import AppButton from "../../components/AppButton";
import bgImage from "../../assets/bg.png";
import logo from '../../assets/logo.svg'
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
        <div className="md:container md:mx-auto mx-auto  flex justify-center">
        <div className="flex-1 ">
          <Image
            src={bgImage}
            width={300}
            height={450}
            alt="Picture of the author"
          />
        </div>

        <div className=" text-center mx-auto bg-white px-6 py-4 justify-center">
        <div className=" text-center mx-auto">
            <Image
            src={logo}
            
            alt="Picture of the author"
          />
            </div>
            <form action="" className="  text-center" >
           
           


            <AppButton style={"white"} type={"submit"} text={"Login"} />

            <p>Don't have an account? <a href="/auth/signup" className="text-red-600 px-2">Sign up</a></p>

            <AppButton style={"white"} type={"submit"} text={"Continue with Google"}  />
            </form>
          
        </div>
       
      </div>
      <AppFooter text="(c) Copyright Love Clinic 2023" />
        </div>
      

     
    </main>
  );
}
