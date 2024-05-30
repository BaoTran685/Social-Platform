import { ForgotPassword_Items } from "@/components/types/auth/forgot-password";


export const FORGOT_PASSWORD_ITEMS: ForgotPassword_Items = {
  objectKey: ['email'],
  initUser: {email: ''},
  initIsError: {email: false},
  initErrorMessage: {email: ''},
  field: {
    email: {name: 'email', type: 'text', placeholder: 'Email'},
  },
  formType: 'forgotPassword',
  endPoint: process.env.BASE_URL + '/api/auth/forgot-password',
  buttonName: 'Forgot Password',
  callback: null,
}