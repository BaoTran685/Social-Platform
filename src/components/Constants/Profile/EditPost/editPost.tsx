import { EditPostItems } from "@/components/Types/Profile/EditPost/editPost";


export const EDIT_POST_ITEMS: EditPostItems = {
  objectKey: ['title', 'date', 'content'],
  initNewInfo: {title: '', date: '', content: ''},
  initErrorMessage: {title: '', date: '', content: ''},
  field: {
    title: {
      label: 'Title',
      name: 'title',
      type: 'text',
      placeholder: 'Your Title',
      isInput: true,
    },
    date: {
      label: 'Date',
      name: 'date',
      type: 'date',
      placeholder: '',
      isInput: true,
    },
    content: {
      label: 'Content',
      name: 'content',
      type: 'text',
      placeholder: 'Type Something Here',
      isInput: false,
    }
  },
  buttonName: 'Update',
  formType: 'editPost'
}