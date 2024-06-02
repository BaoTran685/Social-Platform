import { LOGIN_ITEMS, LOGIN_LINKS } from "@/components/Constants/Auth/login";
import AuthFormWrapper from "@/components/Form/authFormWrapper";

const LoginPage = async () => {
  return (
    <AuthFormWrapper items={LOGIN_ITEMS} links={LOGIN_LINKS} />
  )
}

export default LoginPage;