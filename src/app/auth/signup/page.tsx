import Image from 'next/image'
import AppInput from "@/app/components/AppInput";
import AppButton from "@/app/components/AppButton";

export default function Home() {
    return (
        <div className="form_wrapper">
            <form>
                <div className={"form-control"}>
                    <label>E-mail</label>
                    <AppInput placeholder={"Enter e-mail"} name={"email"} />
                </div>

                <div className={"form-control"}>
                    <label>Password</label>
                    <AppInput placeholder={"Enter password"} name={"password"} type={"password"}/>
                </div>

                <a className={"float-right"} href={"#"}>Forgot Password</a>

                <AppButton className={"mt-20"} text={"Login"} />

            </form>

            <div className={"auth-footer"}>

                <p>Don't have an account? <a href={"#"}>Sign up</a></p>

                <AppButton backgroundColor={"black"} text={"Continue with Google"}/>
            </div>
        </div>
    )
}
