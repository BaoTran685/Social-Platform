import ForgotPassword from "@/components/Form/Auth/forgotPassword";
import ChangePassword from "@/components/Form/Auth/changePassword";
import prisma from "@/lib/prisma";

interface ResetPasswordPageParams {
  searchParams: { [key: string]: string | string[] | undefined }
}
const ResetPasswordPage = async ({ searchParams }: ResetPasswordPageParams) => {
  const token = searchParams.token as string;
  if (token) {
    const users = await prisma.user.findMany({
      where: {
        resetPasswordToken: token,
      }
    });
    if (!users) {
      return <div>Invalid Token</div>
    } else if (users.length >= 2) {
      return <div>Token fail</div>
    } else {
      return (
        <ChangePassword resetPasswordToken={token} />
      )
    }
  }

  return (
    <ForgotPassword />
  )
}

export default ResetPasswordPage;