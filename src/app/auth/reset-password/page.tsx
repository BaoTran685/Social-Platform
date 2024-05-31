import ForgotPassword from "@/components/form/forgotPassword";
import ChangePassword from "@/components/form/changePassword";
import { connectToDatabase } from "@/helper/server-helper";
import prisma from "@/lib/prisma";

interface ResetPasswordPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}
const ResetPasswordPage = async ({searchParams} : ResetPasswordPageProps) => {
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
        <ChangePassword resetPasswordToken={token}/>
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