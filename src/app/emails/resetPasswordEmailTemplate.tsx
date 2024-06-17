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
      <Preview>Social Platform Password Reset</Preview>
      <Tailwind>
        <Body className="bg-[white] text-[#37352F] font-sans">
          <Container className="bg-gray-300 mx-auto my-0 p-[20px]">
            <Section className="bg-[white]" id='wrapper'>
              <Section className="bg-[#344358] h-[30px]" />
              <Section className="px-[20px] py-[25px]" id='upper section'>
                <Heading className="text-center text-[30px] font-bold m-0">Forgot your Password?</Heading>
                <Container className="mt-[16px]">
                  <Link href={`${baseUrl}/auth/reset-password?token=${resetPasswordToken}`} target="_blank">
                    <Heading className="text-[#244367] text-center text-[36px] font-bold underline mt-0 mb-[10px]">Click!</Heading>
                  </Link>
                  <Text className="text-center text-[14px] m-0">
                    (This link is valid for 24 hours)
                  </Text>
                </Container>
              </Section>
              <Hr />
              <Section className="px-[20px] py-[25px]" id='lower section'>
                <Text className="text-[14px] my-0">
                  The account username is{' '}
                  <span className="text-[14px] font-bold underline decoration-[#ec4899]">{username}</span>
                  , is being registered with the email{' '}
                  <span className="text-[14px] font-bold text-[#244367]">{email}</span>
                </Text>
              </Section>
            </Section>
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