import {
  Tailwind,
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.BASE_URL
  ? `${process.env.BASE_URL}`
  : "http://localhost:3000";

interface VerifyEmailEmailTemplateProps {
  username: string,
  verifyEmailToken: string,
  email: string,
}

export default function VerifyEmailEmailTemplate({
  username = 'iambaotran.05', verifyEmailToken = 'randomToken', email = 'baopei05@gmail.com',
}: VerifyEmailEmailTemplateProps) {
  // remember to add the font later when finalise the app
  return (
    <Html lang='en'>
      <Head />
      <Preview>Social Platform Email Verification</Preview>
      <Tailwind>
        <Body className="bg-[white] text-[#37352F] font-sans">
          <Container className="px-[10px] py-[20px]">
            <Heading className="text-[26px] font-bold m-0">Email Verification</Heading>
            <Text className="text-[16px] my-[16px]">
              Hi ...!
              <br />
              To complete the verification process, you can click the link below.
              If you don&apos;t want to verify or if it isn&apos;t you, you can ignore this message.
            </Text>
            <Container>
              <Link href={`${baseUrl}/auth/verify-email?token=${verifyEmailToken}`} target="_blank">
                <Heading className="text-[#244367] text-center text-[36px] font-bold underline mt-0 my-[8px]">Click!</Heading>
              </Link>
              <Text className="text-center text-[16px] m-0">
                Note: This link will not be expired !!!
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