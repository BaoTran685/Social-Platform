
import { ProfileUpdateItems } from "@/components/Types/Profile/Update/update"

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
      typeInput: 'input',
    },
    email: {
      label: 'New Email',
      name: 'email',
      type: 'text',
      placeholder: 'Your Email',
      typeInput: 'input',
    },
    description: {
      label: 'New Description',
      name: 'description',
      type: 'text',
      placeholder: 'Say Something About Yourself',
      typeInput: 'textarea'
    }
  },
  endPoint: process.env.BASE_URL + '/api/profile/update',
}
