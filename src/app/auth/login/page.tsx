import 'react-app-polyfill/ie11';
import React from 'react';
// import Image from 'next/image'
//  import * as Formik from "formik"

import * as Yup  from 'yup'

import AppInput from "@/app/components/AppInput";
import AppButton from "@/app/components/AppButton";


const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Required'),
  password: Yup.string().required('Required')
})



export default function Home() {
    return (
        <div className="w-full px-20">

          {/* <Formik.Formik initialValues={{
            email: '',
            password: ''
          }}validationSchema={LoginSchema}
            onSubmit={values => {
            console.log(values)
          }}
          >
            {({ errors, touched }: any) => ( */}
            <form>
                <div className={"form-control"}>
                    <label className={"text-black"}>E-mail</label>
                    <AppInput placeholder={"Enter e-mail"} name={"email"} type={"email"} />
                    {/* {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                   ) : null} */}
                </div>

                <div className={"form-control"}>
                    <label className={"text-black"}>Password</label>
                    <AppInput placeholder={"Enter password"} name={"password"} type={"password"}/>
                    {/* {errors.password && touched.password ? (
                      <div>{errors.password}</div>
                    ): null} */}
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
