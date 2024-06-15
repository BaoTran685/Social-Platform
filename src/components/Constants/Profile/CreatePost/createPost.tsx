import { CreatePostItems, Post_Option } from "@/components/Types/Profile/CreatePost/createPost";


export const privacyOptions: Post_Option[] = [
  { value: 'public', label: 'Public', color: '#21A179' },
  { value: 'private', label: 'Private', color: '#ec5e06' },
  { value: 'only me', label: 'Only me', color: '#b91c1c' },
]

export const CREATE_POST_ITEMS: CreatePostItems = {
  objectKey: ['title', 'privacy', 'content'],
  initNewInfo: { title: '', privacy: 'public', content: '' },
  initErrorMessage: { title: '', privacy: '', content: '' },
  field: {
    title: {
      label: 'Title',
      name: 'title',
      type: 'text',
      placeholder: 'Your Title',
      typeInput: 'input',
    },
    privacy: {
      label: 'Privacy',
      options: privacyOptions,
      name: 'privacy',
      type: 'text',
      placeholder: 'Your Privacy',
      typeInput: 'select',
    },
    content: {
      label: 'Content',
      name: 'content',
      type: 'text',
      placeholder: 'Type Something Here',
      typeInput: 'textarea',
    }
  },
  buttonName: 'Post',
  formType: 'createPost'
}