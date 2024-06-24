import { privacyOptions } from "@/components/Constants/Profile/CreatePost/createPost"
import { Post_Option } from "@/components/Types/Post/CreatePost/createPost";



export const getPrivacyOptions = ({ value }: { value: string }): Post_Option | null => {
  for (const option of privacyOptions) {
    if (option.value === value) {
      return option
    }
  }
  return null;
}