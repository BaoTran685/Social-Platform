import { LinkObj } from "@/components/Types/Auth/auth"
import { Login_Items } from "@/components/Types/Auth/login"

export const LOGIN_ITEMS: Login_Items = {
  objectKey: ['username', 'password'],
  initUser: {username: '', password: ''},
  initIsError: {username: false, password: false},
  initErrorMessage: {username: '', password: ''},
  field: {
    username: { name: 'username', type: 'text', placeholder: 'Username' },
    password: { name: 'password', type: 'password', placeholder: 'Password' }
  },
  formType: 'login',
  endPoint: null,
  buttonName: 'Log In',
  callback: '/profile',
}

export const LOGIN_LINKS: LinkObj[] = [
  {
    name: 'Create an account',
    path: '/auth/register',
  },
  {
    name: 'Login with email',
    path: '/auth/login-with-email',
  }
]