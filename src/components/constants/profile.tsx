import { ProfileItem } from "../types/profile";


export const PROFILE_ITEMS: ProfileItem = {
  objectKey: ['username', 'email', 'name', 'number_post', 'number_following', 'number_follower', 'description'],
  initProfile: { username: '', email: '', name: '', number_post: '', number_follower: '', number_following: '', description: '' },
}