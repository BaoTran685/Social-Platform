import { FORGOT_PASSWORD_ITEMS, FORGOT_PASSWORD_LINKS } from "@/components/Constants/Auth/forgotPassword";
import AuthFormWrapper from "./authFormWrapper";



const ForgotPassword = () => {
  return (
    <AuthFormWrapper items={FORGOT_PASSWORD_ITEMS} links={FORGOT_PASSWORD_LINKS} />
  )
}

export default ForgotPassword;