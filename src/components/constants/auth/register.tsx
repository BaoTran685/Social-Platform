import { Register_Items } from "@/components/Types/auth/register";


export const REGISTER_ITEMS: Register_Items = {
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
  callback: '/auth/login',
}