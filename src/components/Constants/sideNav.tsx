import { HomeIcon, ProfileIcon, MessageIcon } from "../Icon/icons"
import { SideNavArray } from "../Types/sideNav"

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
