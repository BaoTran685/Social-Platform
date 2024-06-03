import { REGISTER_ITEMS, REGISTER_LINKS } from "@/components/Constants/Auth/register";
import AuthFormWrapper from "@/components/Form/Auth/authFormWrapper";

const RegisterPage = async () => {
  return (
    <AuthFormWrapper items={REGISTER_ITEMS} links={REGISTER_LINKS} />
  )
}

export default RegisterPage;