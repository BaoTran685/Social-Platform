

import * as React from 'react';

interface VerifyEmailEmailTemplateProps {
  email: string,
  verifyEmailToken: string,
}

export const VerifyEmailEmailTemplate: React.FC<Readonly<VerifyEmailEmailTemplateProps>> = ({
  email, verifyEmailToken,
}) => (
  <div>
    <h1>Verify for <b>{email}</b></h1>
    <p>
      To verify,
    </p>
    <a href={`http://localhost:3000/auth/verify-email?token=${verifyEmailToken}`}>
      Click here to verify email
    </a>
  </div>
);

