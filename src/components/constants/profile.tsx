import { ProfileItem } from "../types/profile";

export const PROFILE_ITEMS: ProfileItem = {
  objectKey: ['username', 'name', 'email', 'number_post', 'number_following', 'number_follower', 'description'],
  initProfile: { username: '', name: '', email: '', number_post: '', number_follower: '', number_following: '', description: '' },
}