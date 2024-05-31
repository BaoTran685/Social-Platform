
import Link from "next/link";
import FormSection from "@/components/Form/formSection";

import { REGISTER_ITEMS } from "@/components/constants/auth/register";

const RegisterPage = async () => {
  return (
    <main className="min-h-screen">
      <div className="">
        <div className="pt-32">
          <div className="flex flex-row align-center justify-center">
            <div className="w-4/5 max-w-[400px] h-full">
              <div className="place-self-center text-[#37352F] text-xl text-center">
                Social Media
              </div>
              <FormSection items={REGISTER_ITEMS}/>
              <div className="text-center mt-3">
                <Link href="/auth/login" className="text-[#37352F] underline">
                  Already have an account?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default RegisterPage;