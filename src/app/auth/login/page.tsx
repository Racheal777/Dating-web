import AppFooter from "@/app/components/AppFooter";
import AppButton from "../../components/AppButton";
import bgImage from "../../assets/bg.png";
import logo from '../../assets/logo.svg'
import Image from "next/image";

export default function Home() {
  return (
   
            <form action="" className="  text-center" >
        

            <AppButton style={"white"} type={"submit"} text={"Login"} />

            <p className="text-black">Don't have an account? <a href="/auth/signup" className="text-red-600 px-2">Sign up</a></p>

            <AppButton style={"white"} type={"submit"} text={"Continue with Google"}  />
            </form>
          
       

 
  );
}
