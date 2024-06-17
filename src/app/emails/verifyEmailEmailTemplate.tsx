import { InboxStackIcon } from "@heroicons/react/24/outline";
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
  Section,
  Text,
  Img,
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
          <Container className="bg-gray-300 mx-auto my-0 p-[20px]">
            <Section className="bg-[white]" id='wrapper'>
              <Section className="bg-[#344358] h-[30px]" />
              <Section className="px-[20px] py-[25px]" id='upper section'>
                <Heading className="text-[20px] font-bold m-0">Verify your email address</Heading>
                <Text className="text-[14px] my-[16px]">
                  Hi ...!
                  <br />
                  Thanks for starting the email sign-up process.
                  We want to make sure it's really you. Please click the link below to complete the email verification process.
                  If you don&apos;t want to verify or it isn&apos;t you, you can ignore this message.
                </Text>
                <Container>
                  <Link href={`${baseUrl}/auth/verify-email?token=${verifyEmailToken}`} target="_blank">
                    <Heading className="text-[#244367] text-center text-[36px] font-bold underline mt-0 mb-[10px]">Click!</Heading>
                  </Link>
                  <Text className="text-center text-[14px] m-0">
                    (This link will not be expired)
                  </Text>
                </Container>
              </Section>
              <Hr />
              <Section className="px-[20px] py-[25px]" id='lower section'>
                <Text className="text-[14px] my-0">
                  The account username is{' '}
                  <span className="text-[14px] font-bold underline decoration-[#ec4899]">{username}</span>
                  , is being registered with the email{' '}
                  <Link href={`mailto:${email}`} target="_blank" className="text-[14px] font-bold text-[#244367]">{email}</Link>
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