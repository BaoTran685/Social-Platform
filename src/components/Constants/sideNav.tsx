import { HomeIcon, ProfileIcon, MessageIcon } from "../icon/icons"
import { SideNavArray } from "../types/sideNav"

export const SIDENAV_ARRAY: SideNavArray[] = [
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
