import * as Yup from 'yup';
import AppInput from "@/app/components/AppInput";
import AppButton from "@/app/components/AppButton";


const SignupSchema = Yup.object().shape({});
export default function Home() {
    return (
        <div className="w-10/12 px-20 overflow-auto">

                <form>
                    <div className={"form-control"}>
                        <label className={"text-black"}>First Name</label>
                        <AppInput placeholder={"Enter first name"} name={"firstName"} />
                    </div>

                    <div className={"form-control"}>
                        <label className={"text-black"}>Last Name</label>
                        <AppInput placeholder={"Enter last name"} name={"lastName"} />
                    </div>
                    <div className={"form-control"}>
                        <label className={"text-black"}>E-mail</label>
                        <AppInput placeholder={"Enter e-mail"} name={"email"} type={"email"} />
                    </div>

                    <div className={"form-control"}>
                        <label className={"text-black"}>Phone Number</label>
                        <AppInput placeholder={"Enter phone number"} name={"phoneNumber"} />
                    </div>

                    <div className={"form-control"}>
                        <label className={"text-black"}>Password</label>
                        <AppInput placeholder={"Enter password"} name={"password"} type={"password"}/>
                    </div>

                    <div className={"form-control"}>
                        <label className={"text-black"}>Confirm Password</label>
                        <AppInput placeholder={"Repeat password"} name={"confirmPassword"} type={"password"}/>
                    </div>

                    <a className={"text-black float-right"} href={"#"}>Forgot Password</a>

                    <div className={"mt-20"}>
                        <AppButton text={"Sign Up"} />
                    </div>

                </form>

            <div className={"auth-footer"}>

                <p className={"text-black"}>Don't have an account? <a href={"#"} className={"text-red-600"}>Sign up</a></p>

                <AppButton backgroundColor={"black"} text={"Continue with Google"}/>
            </div>
        </div>
    )
}
