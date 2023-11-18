import AppFooter from "@/app/components/AppFooter";
import AppButton from "../components/AppButton";
import bgImage from "../assets/bg.png";
import logo from "../assets/logo.svg";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="items-center justify-between">
      <div>
        <div className="flex justify-center">
          <div className="flex-1 ">
            <Image src={bgImage} alt="Picture of the author" />
          </div>

          <div className=" text-center mx-auto bg-white px-6 py-4 justify-center">
            <div className=" text-center mx-auto">
              <Image src={logo} alt="Picture of the author" />
            </div>

            {children}
          </div>
        </div>
        <AppFooter text="(c) Copyright Love Clinic 2023" />
      </div>
    </main>
  );
}
