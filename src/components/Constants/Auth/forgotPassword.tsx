import { LinkObj } from "@/components/Types/Auth/auth";
import { ForgotPassword_Items } from "@/components/Types/Auth/forgotPassword";


export const FORGOT_PASSWORD_ITEMS: ForgotPassword_Items = {
  objectKey: ['email'],
  initUser: {email: ''},
  initIsError: {email: false},
  initErrorMessage: {email: ''},
  field: {
    email: {name: 'email', type: 'text', placeholder: 'Email'},
  },
  formType: 'forgotPassword',
  endPoint: null,
  buttonName: 'Forgot Password',
  callback: null,
}

export const FORGOT_PASSWORD_LINKS: LinkObj[] = [
  {
    name: 'Already have an account?',
    path: '/auth/login',
  }
]