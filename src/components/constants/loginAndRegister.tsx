import { LoginRegisterItem } from "../types/loginAndRegister"

export const LOGIN_ITEMS: LoginRegisterItem = {
  arr: ['username', 'password'],
  userInfo: {username: '', password: ''},
  fillError: {username: false, password: false},
  field: [
    { name: 'username', type: 'text', placeholder: 'Username' },
    { name: 'password', type: 'password', placeholder: 'Password' }
  ],
  formType: 'login',
  endPoint: '/api/auth/login',
  buttonName: 'Log In',
  callback: '/profile'
}

export const REGISTER_ITEMS: LoginRegisterItem = {
  arr: ['username', 'name', 'password'],
  userInfo: {username: '', name: '', password: ''},
  fillError: {username: false, name: false, password: false},
  field: [
    { name: 'username', type: 'text', placeholder: 'Username' },
    { name: 'name', type: 'text', placeholder: 'Name'},
    { name: 'password', type: 'password', placeholder: 'Password' }
  ],
  formType: 'register',
  endPoint: '/api/auth/register',
  buttonName: 'Sign In',
  callback: '/profile'
}