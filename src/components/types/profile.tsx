
export type ProfileObj = {
  username: string,
  name: string,
  number_post: string,
  number_following: string,
  number_follower: string,
  description: string,
}


export type ProfileItem = {
  objectKey: Array<string>,
  initProfile: ProfileObj
}