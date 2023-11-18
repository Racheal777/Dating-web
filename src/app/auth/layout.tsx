import AppFooter from "@/app/components/AppFooter";
import logo from "../assets/logo.svg";
import Image from "next/image";
import back from '../assets/bgImage.png';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      {/* Background Image Section */}
      {/* <div className="relative w-full h-64 md:h-screen overflow-hidden">
        <Image src={back} layout="fill" objectFit="cover" alt="Background Image" />
      </div> */}

      {/* Content Section */}
      <div className="flex-1 w-full md:w-2/3 text-center bg-white px-6 py-4">
        {/* Logo Section */}
        <div className="mx-auto mt-2">
          <Image src={logo} width={242} height={149} className="mx-auto" alt="Logo" />
        </div>

        {/* Main Content Section */}
        <div className="px-4 md:px-12 py-2">
          {children}
        </div>
      </div>

      {/* Footer Section */}
      <AppFooter text="(c) Copyright Love Clinic 2023" />
    </main>
  );
}
