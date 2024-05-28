
export type ProfileObj = {
  userid: string,
  name: string,
  number_post: string,
  number_following: string,
  number_follower: string,
  description: string,
}

export type ObjectKey = 'userid' | 'name' | 'number_post' | 'number_following' | 'number_follower' | 'description'
export type ProfileItem = {
  objectKey: Array<ObjectKey>,
  initProfile: ProfileObj
}