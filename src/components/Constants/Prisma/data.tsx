import { Prisma } from "@prisma/client"


export const USER_MODEL_ARRAY: (keyof Prisma.UserSelect)[] = [
  'id', 'username', 'hashPassword', 'info', 'number', 'posts', 'email', 'resetPasswordToken',
  'resetPasswordTokenExpiry', 'emailVerified', 'verifyEmailToken',

]

export const INFO_MODEL_ARRAY: (keyof Prisma.InfoSelect)[] = [
  'infoId', 'user', 'name', 'email', 'description',
]

export const NUMBER_MODEL_ARRAY: (keyof Prisma.NumberSelect)[] = [
  'numberId', 'user', 'number_post', 'number_follower', 'number_following',
]

export const POST_MODEL_ARRAY: (keyof Prisma.PostSelect)[] = [
  'postId', 'title', 'content', 'privacy', 'authorUsername', 'authorId', 'author', 'createdAt', 'updatedAt'
]