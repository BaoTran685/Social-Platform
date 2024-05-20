
import { LoginRegisterItem, SideNavItem } from "./types"
import  {HomeIcon, ProfileIcon, MessageIcon}  from "./Icon/Icons";


export const LOGIN_ITEMS : LoginRegisterItem= {
  arr: ['username', 'password'],
  field: [
    {name: 'username', type: 'text', placeholder: 'Username'},
    {name: 'password', type: 'password', placeholder: 'Password'}
  ],
  formType: 'login',
  endPoint: '/api/auth/login',
}

export const REGISTER_ITEMS : LoginRegisterItem= {
  arr: ['username', 'name', 'password'],
  field: [
    {name: 'username', type: 'text', placeholder: 'Username'},
    {name: 'userid', type: 'text', placeholder: 'UserId'},
    {name: 'name', type: 'text', placeholder: 'Name'},
    {name: 'password', type: 'password', placeholder: 'Password'}
  ],
  formType: 'register',
  endPoint: '/api/auth/register',
}

export const SIDENAV_ITEMS : SideNavItem[] = [
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