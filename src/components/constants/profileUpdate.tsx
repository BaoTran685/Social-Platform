
import { ProfileUpdateItems } from "../types/profileUpdate"

export const PROFILE_UPDATE_ITEMS: ProfileUpdateItems = {
  objectKey: ['userid', 'name', 'description'],
  initNewInfo: { userid: '', name: '', description: '' },
  initFillError: { userid: false, name: false, description: false },
  fields: {
    userid: {
      label: 'New UserId',
      name: 'userid',
      type: 'text',
      placeholder: 'iambaotran.05',
      isInput: true,
    },
    name: {
      label: 'New Name',
      name: 'name',
      type: 'text',
      placeholder: 'Bao Tran',
      isInput: true,
    },
    description: {
      label: 'New Description',
      name: 'description',
      type: 'text',
      placeholder: 'Say Something About Yourself',
      isInput: false,
    }
  },
  endPoint: process.env.BASE_URL + '/api/profile/update',
}