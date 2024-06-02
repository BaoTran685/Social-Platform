import { verifyEmail } from "@/app/actions/users/verify-email";
import prisma from "@/lib/prisma";

interface VerifyEmailPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}
const VerifyEmailPage = async ({ searchParams }: VerifyEmailPageProps) => {
  const token = searchParams.token as string;

  if (token) {
    const user = await prisma.user.findFirst({
      where: {
        verifyEmailToken: token,
      }
    });
    if (user) {
      await verifyEmail({ verifyEmailToken: token })
      return (
        <div>Email verified for {user.email}</div>
      )
    }
  }

  return (
    <div>Invalid token</div>
  )
}

export default VerifyEmailPage;