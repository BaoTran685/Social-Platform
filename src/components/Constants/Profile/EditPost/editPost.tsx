import { EditPostItems } from "@/components/Types/Post/EditPost/editPost";
import { privacyOptions } from "../CreatePost/createPost";


export const EDIT_POST_ITEMS: EditPostItems = {
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
  formType: 'editPost'
}