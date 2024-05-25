import { HomeIcon, ProfileIcon, MessageIcon } from "../Icon/icons"
import { SideNavItem } from "../types/sideNav"

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