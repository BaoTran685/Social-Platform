import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import * as React from "react";

const baseUrl = process.env.BASE_URL
  ? `${process.env.BASE_URL}`
  : "http://localhost:3000";

interface ResetPasswordEmailTemplateProps {
  username: string,
  resetPasswordToken: string,
  email: string,
}

export default function ResetPasswordEmailTemplate({
  username = 'iambaotran.05', resetPasswordToken = 'randomToken', email = 'baopei05@gmail.com',
}: ResetPasswordEmailTemplateProps) {
  // remember to add the font later when finalise the app
  return (
    <Html lang='en'>
      <Head />
      <Preview>Social Platform Reset Password</Preview>
      <Tailwind>
        <Body className="bg-[white] text-[#37352F] font-sans">
          <Container className="py-[20px]">
            <Heading className="text-center text-[26px] font-bold m-0">Forgot your Password?</Heading>
            <Text className="text-center text-[16px]">
              To reset your password, please click the link below and you will be directed to the reset password page.
            </Text>
            <Container className="mt-[16px]">
              <Link href={`${baseUrl}/auth/reset-password?token=${resetPasswordToken}`} target="_blank">
                <Heading className="text-[#244367] text-center text-[36px] font-bold underline mt-0 mb-[10px]">Click!</Heading>
              </Link>
              <Text className="text-center text-[14px] m-0">
                Note: This link is valid for 24 hours !!!
              </Text>
            </Container>
            <Hr />
            <Text className="text-[16px] mb-0">
              The account username is{' '}
              <span className="text-[16px] font-bold underline decoration-[#ec4899]">{username}</span>
              , is being registered with the email{' '}
              <Link href={`mailto:${email}`} target="_blank" className="text-[16px] font-bold text-[#244367]">{email}</Link>
            </Text>
            <Text className="text-center text-[black] text-[14px] mt-[20px] mb-0">
              © 2024 Copyright{' '}
              <Link href={`baseUrl`} target="_blank" className="text-[#244367] text-[14px] font-bold underline">Social Platform</Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}