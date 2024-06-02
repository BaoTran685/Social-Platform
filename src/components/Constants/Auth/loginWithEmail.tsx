import { LinkObj } from "@/components/Types/Auth/auth";
import { LoginWithEmail_Items } from "@/components/Types/Auth/loginWithEmail";

export const LOGIN_WITH_EMAIL_ITEMS: LoginWithEmail_Items = {
  objectKey: ['email', 'password'],
  initUser: {email: '', password: ''},
  initIsError: {email: false, password: false},
  initErrorMessage: {email: '', password: ''},
  field: {
    email: { name: 'email', type: 'text', placeholder: 'Email' },
    password: { name: 'password', type: 'password', placeholder: 'Password' }
  },
  formType: 'loginWithEmail',
  endPoint: null,
  buttonName: 'Log In',
  callback: '/profile',
}

export const LOGIN_WITH_EMAIL_LINKS: LinkObj[] = [
  {
    name: 'Forgot password?',
    path: '/auth/reset-password'
  },
  {
    name: 'Login with username',
    path: '/auth/login'
  },
  
]