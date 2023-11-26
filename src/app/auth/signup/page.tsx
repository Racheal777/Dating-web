import Image from 'next/image'
import AppInput from "@/app/components/AppInput";
import AppButton from "@/app/components/AppButton";

export default function Home() {
    return (
        <div className="w-full px-20">
            <form>
                <div className={"form-control"}>
                    <label className={"text-black"}>E-mail</label>
                    <AppInput placeholder={"Enter e-mail"} name={"email"} />
                </div>

                <div className={"form-control"}>
                    <label className={"text-black"}>Password</label>
                    <AppInput placeholder={"Enter password"} name={"password"} type={"password"}/>
                </div>

                <a className={"text-black float-right"} href={"#"}>Forgot Password</a>

                <div className={"mt-20"}>
                    <AppButton text={"Login"} />
                </div>

            </form>

            <div className={"auth-footer"}>

                <p className={"text-black"}>Don't have an account? <a href={"#"} className={"text-red-600"}>Sign up</a></p>

                <AppButton backgroundColor={"black"} text={"Continue with Google"}/>
            </div>
        </div>
    )
}
