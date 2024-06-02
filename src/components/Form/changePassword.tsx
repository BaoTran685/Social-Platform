import { CHANGE_PASSWORD_ITEMS, CHANGE_PASSWORD_LINKS } from "../Constants/Auth/changePassword";
import AuthFormWrapper from "./authFormWrapper";



const ChangePassword = ({ resetPasswordToken }: { resetPasswordToken: string }) => {
  return (
    <AuthFormWrapper items={CHANGE_PASSWORD_ITEMS} links={CHANGE_PASSWORD_LINKS} resetPasswordToken={resetPasswordToken} />
  )
}

export default ChangePassword;