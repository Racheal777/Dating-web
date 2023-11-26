import Image from 'next/image'
import AppInput from "@/app/components/AppInput";
import AppButton from "@/app/components/AppButton";

export default function Home() {
    return (
        <div className="w-full px-20">
           

            <div className={"auth-footer"}>

                <p className={"text-black"}>Don't have an account? <a href={"#"} className={"text-red-600"}>Sign up</a></p>

                <AppButton backgroundColor={"black"} text={"Continue with Google"}/>
            </div>
        </div>
    )
}
