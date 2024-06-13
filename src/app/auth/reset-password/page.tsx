import ForgotPassword from "@/components/Form/Auth/forgotPassword";
import ChangePassword from "@/components/Form/Auth/changePassword";
import { connectToDatabase } from "@/helper/server-helper";
import prisma from "@/lib/prisma";

interface ResetPasswordPageParams {
  searchParams: { [key: string]: string | string[] | undefined }
}
const ResetPasswordPage = async ({ searchParams }: ResetPasswordPageParams) => {
  const token = searchParams.token as string;

  if (token) {
    await connectToDatabase();
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
      }
    });
    if (user) {
      return (
        <ChangePassword resetPasswordToken={token} />
      )
    } else {
      return <div>Invalid Token</div>
    }
  }

  return (
    <ForgotPassword />
  )
}

export default ResetPasswordPage;