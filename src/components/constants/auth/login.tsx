import { Login_Items } from "@/components/types/auth/login"

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
  endPoint: process.env.BASE_URL + '/api/auth/[...nextauth]',
  buttonName: 'Log In',
  callback: '/profile',
}
