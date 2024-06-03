
import { ProfileUpdateItems } from "@/components/Types/Profile/profileUpdate"

export const PROFILE_UPDATE_ITEMS: ProfileUpdateItems = {
  objectKey: ['name', 'email', 'description'],
  initNewInfo: { name: '', email: '', description: '' },
  initErrorMessage: { name: '', email: '', description: '' },
  field: {
    name: {
      label: 'New Name',
      name: 'name',
      type: 'text',
      placeholder: 'Your Name',
      isInput: true,
    },
    email: {
      label: 'New Email',
      name: 'email',
      type: 'text',
      placeholder: 'Your Email',
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
