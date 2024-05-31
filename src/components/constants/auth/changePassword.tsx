import { ChangePassword_Items } from "@/components/Types/Auth/changePassword";



export const CHANGE_PASSWORD_ITEMS: ChangePassword_Items = {
  objectKey: ['password', 'confirmPassword'],
  initUser: {password: '', confirmPassword: ''},
  initIsError: {password: false, confirmPassword: false},
  initErrorMessage: {password: '', confirmPassword: ''},
  field: {
    password: {name: 'password', type: 'password', placeholder: 'Password'},
    confirmPassword: {name: 'confirmPassword', type: 'password', placeholder: 'Confirm Password'},
  },
  formType: 'changePassword',
  endPoint: null,
  buttonName: 'Update Password',
  callback: null,
}