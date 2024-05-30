
import Link from "next/link";
import FormSection from "@/components/Form/formSection";

import { LOGIN_ITEMS } from "@/components/constants/auth/login";

const LoginPage = async () => {
  return (
    <main className="min-h-screen">
      <div className="">
        <div className="pt-32">
          <div className="flex flex-row align-center justify-center">
            <div className="w-4/5 max-w-[400px] h-full">
              <div className="place-self-center text-[#37352F] text-xl text-center">
                Social Media
              </div>
              <FormSection items={LOGIN_ITEMS} />
              <div className="text-center mt-3">
                <Link href="/auth/register" className="text-[#37352F] underline">
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LoginPage;