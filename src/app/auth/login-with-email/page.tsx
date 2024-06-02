import { LOGIN_WITH_EMAIL_ITEMS, LOGIN_WITH_EMAIL_LINKS } from "@/components/Constants/Auth/loginWithEmail";
import AuthFormWrapper from "@/components/Form/authFormWrapper";



const LoginWithEmailPage = () => {
  return (
    <AuthFormWrapper items={LOGIN_WITH_EMAIL_ITEMS} links={LOGIN_WITH_EMAIL_LINKS} />
  )
}

export default LoginWithEmailPage;