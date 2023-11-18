import AppFooter from "@/app/components/AppFooter";
import AppButton from "../../components/AppButton";
import bgImage from "../../assets/bg.png";
import logo from '../../assets/logo.svg';
import Image from "next/image";
import AppInput from '../../components/AppInput';
import google from '../../assets/google.png';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form action="" className="w-full max-w-md px-4">
        <div className="p-2">
          <label htmlFor="email" className="text-black text-left">Email</label>
          <AppInput name={"email"} placeholder={"Enter e-mail"} />
        </div>

        <div className="p-2">
          <label htmlFor="password" className="text-black text-left">Password</label>
          <AppInput name={"lastName"} placeholder={"Enter last name"} />
        </div>

        <div className="py-4">
          <AppButton backgroundColor={"red"} type={"submit"} text={"Login"} />
        </div>

        <div className="p-2">
          <p className="text-black">Don't have an account? <a href="/auth/signup" className="text-red-600 px-2">Sign up</a></p>
        </div>

        <div className="py-4">
          <AppButton backgroundColor={"black"} type={"submit"} text={"Continue with Google"} />
        </div>

        <div className="p-3">
          <p className="text-red">"Seeking a co-pilot for life's adventures. Let's create our own love story together."</p>
        </div>
      </form>

      {/* Footer Section */}
     
    </div>
  );
}
