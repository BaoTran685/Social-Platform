import Link from "next/link"
import { Items, LinkObj } from "@/components/Types/Auth/auth"
import AuthFormSection from "./authFormSection"

interface AuthFormWrapperProps {
  items: Items,
  links: Array<LinkObj>,
  resetPasswordToken?: string,
}

const AuthFormWrapper = ({ items, links, resetPasswordToken }: AuthFormWrapperProps) => {
  return (
    <main className="min-h-screen">
      <div className="pt-32">
        <div className="flex flex-row align-center justify-center">
          <div className="w-4/5 max-w-[400px] h-full">
            <div className="place-self-center text-[#37352F] text-xl text-center">
              Social Media
            </div>
            <AuthFormSection items={items} resetPasswordToken={resetPasswordToken} />
            <div className="flex flex-col text-center space-y-1 mt-4">
              {links.map((link, index) => (
                <Link key={index} href={link.path} className="text-[#37352F] underline">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AuthFormWrapper;