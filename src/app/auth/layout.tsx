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
    <main className="authContainer">
        <section className="authentic">
            <Image src={bgImage} className={"img"} alt="Picture" />
            <div className="right-col">
                <Image src={logo} className={"mt-7"} alt="Logo" />
                {children}
            </div>
        </section>
        <AppFooter text="(c) Copyright Love Clinic 2023" />
    </main>
  );
}
