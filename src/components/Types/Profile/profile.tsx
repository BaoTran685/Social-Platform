
export type ProfileObj = {
  username: string,
  email: string,
  name: string,
  number_post: number,
  number_following: number,
  number_follower: number,
  description: string,
}

export type ObjectKey = 'username' | 'email' | 'name' | 'number_post' | 'number_following' | 'number_follower' | 'description'
export type ProfileItems = {
  objectKey: Array<ObjectKey>,
  initProfile: ProfileObj,
}