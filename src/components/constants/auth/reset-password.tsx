import { ChangePassword_Items } from "@/components/types/auth/change-password";



export const CHANGE_PASSWORD_ITEMS: ChangePassword_Items = {
  objectKey: ['password', 'confirmPassword'],
  initUser: {password: '', confirmPassword: ''},
  initIsError: {password: false, confirmPassword: false},
  initErrorMessage: {password: '', confirmPassword: ''},
  field: {
    password: {name: 'password', type: 'password', placeholder: 'Password'},
    confirmPassword: {name: 'password', type: 'password', placeholder: 'Confirm Password'},
  },
  formType: 'changePassword',
  endPoint: null,
  buttonName: 'Update Password',
  callback: null,
}