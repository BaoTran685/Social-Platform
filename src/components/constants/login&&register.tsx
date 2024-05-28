import { LoginRegisterItem } from "@/components/types/login&&register"

export const LOGIN_ITEMS: LoginRegisterItem = {
  objectKey: ['email', 'password'],
  initUser: {email: '', password: ''},
  initFillError: {email: false, password: false},
  field: {
    email: { name: 'email', type: 'text', placeholder: 'Email' },
    password: { name: 'password', type: 'password', placeholder: 'Password' }
  },
  formType: 'login',
  endPoint: process.env.BASE_URL + '/api/auth/[...nextauth]',
  buttonName: 'Log In',
  callback: '/profile',
}

export const REGISTER_ITEMS: LoginRegisterItem = {
  objectKey: ['email', 'name', 'password'],
  initUser: {email: '', name: '', password: ''},
  initFillError: {email: false, name: false, password: false},
  field: {
    email: { name: 'email', type: 'text', placeholder: 'Email' },
    name: { name: 'name', type: 'text', placeholder: 'Name'},
    password: { name: 'password', type: 'password', placeholder: 'Password' }
  },
  formType: 'register',
  endPoint: process.env.BASE_URL + '/api/auth/register',
  buttonName: 'Sign In',
  callback: '/profile',
}