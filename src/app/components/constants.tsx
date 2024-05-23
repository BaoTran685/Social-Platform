
import { DataContent, LoginRegisterItem, SideNavItem } from "./types"
import { HomeIcon, ProfileIcon, MessageIcon } from "./Icon/Icons";


export const LOGIN_ITEMS: LoginRegisterItem = {
  arr: ['username', 'password'],
  field: [
    { name: 'username', type: 'text', placeholder: 'Username' },
    { name: 'password', type: 'password', placeholder: 'Password' }
  ],
  formType: 'login',
  endPoint: '/api/auth/login',
  buttonName: 'Log In',
}

export const REGISTER_ITEMS: LoginRegisterItem = {
  arr: ['username', 'password'],
  field: [
    { name: 'username', type: 'text', placeholder: 'Username' },
    { name: 'password', type: 'password', placeholder: 'Password' }
  ],
  formType: 'register',
  endPoint: '/api/auth/register',
  buttonName: 'Sign In'
}

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <ProfileIcon />,
  },
  {
    title: 'Message',
    path: '/message',
    icon: <MessageIcon />
  }
]

export const PROFILE_DATA_CONTENT: DataContent = 
  { userid: '', name: '', number_post: '', number_follower: '', number_following: '', description: '' };
export const PROFILE_DATA: string[] = 
  ['userid', 'name', 'number_post', 'number_following', 'number_follower', 'description'];