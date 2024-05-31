

import * as React from 'react';

interface ResetPasswordEmailTemplate {
  email: string,
  resetPasswordToken: string
}

export const ResetPasswordEmailTemplate: React.FC<Readonly<ResetPasswordEmailTemplate>> = ({
  email, resetPasswordToken,
}) => (
  <div>
    <h1>Reset password for <b>{email}</b></h1>
    <p>
      To reset password,
    </p>
    <a href={`http://localhost:3000/auth/reset-password?token=${resetPasswordToken}`}>
      Click here to reset password
    </a>
  </div>
);

