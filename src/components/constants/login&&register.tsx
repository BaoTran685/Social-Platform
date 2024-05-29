import { LoginRegisterItem } from "@/components/types/login&&register"

export const LOGIN_ITEMS: LoginRegisterItem = {
  objectKey: ['username', 'password'],
  initUser: {username: '', password: ''},
  initIsError: {username: false, password: false},
  initErrorMessage: {username: '', password: ''},
  field: {
    username: { name: 'username', type: 'text', placeholder: 'Username' },
    password: { name: 'password', type: 'password', placeholder: 'Password' }
  },
  formType: 'login',
  endPoint: process.env.BASE_URL + '/api/auth/[...nextauth]',
  buttonName: 'Log In',
  callback: '/profile',
}

export const REGISTER_ITEMS: LoginRegisterItem = {
  objectKey: ['username', 'name', 'password'],
  initUser: {username: '', name: '', password: ''},
  initIsError: {username: false, name: false, password: false},
  initErrorMessage: {username: '', name: '', password: ''},
  field: {
    username: { name: 'username', type: 'text', placeholder: 'Username' },
    name: { name: 'name', type: 'text', placeholder: 'Name'},
    password: { name: 'password', type: 'password', placeholder: 'Password' }
  },
  formType: 'register',
  endPoint: process.env.BASE_URL + '/api/auth/register',
  buttonName: 'Sign In',
  callback: '/login',
}