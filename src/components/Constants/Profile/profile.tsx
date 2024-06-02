import { ProfileItems } from "@/components/Types/Profile/profile";

export const PROFILE_ITEMS: ProfileItems = {
  objectKey: ['username', 'name', 'email', 'number_post', 'number_following', 'number_follower', 'description'],
  initProfile: { username: '', name: '', email: '', number_post: 0, number_follower: 0, number_following: 0, description: '' },
}
