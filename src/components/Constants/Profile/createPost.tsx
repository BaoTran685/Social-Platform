import { CreatePostItems } from "@/components/Types/Profile/createPost";


export const CREATE_POST_ITEMS: CreatePostItems = {
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
  endPoint: process.env.BASE_URL + '/api/profile/update'
}