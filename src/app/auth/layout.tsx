import AppFooter from "@/app/components/AppFooter";
import AppButton from "../components/AppButton";
import bgImage from "../assets/bg.png";
import logo from "../assets/logo.svg";
import Image from "next/image";
import AppInput from "@/app/components/AppInput";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col max-h-screen">
        <div className="flex-grow flex max-h-screen overflow-auto">

            <div className="w-1/2 md:flex hidden bg-gray-200 p-8 overflow-hidden h-screen">
                <Image src={bgImage} className="object-cover h-full w-full rounded-md" alt="Picture" />
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col items-center">
                {/*<Image src={logo} className={""} alt="Logo" />*/}
                {children}
            </div>
        </div>
        <AppFooter text="(c) Copyright Love Clinic 2023" />
    </div>
  );
}
