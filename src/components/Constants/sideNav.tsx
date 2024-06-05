import { HomeIcon, ProfileIcon, MessageIcon, SearchIcon } from "../Icon/icons"
import { SideNavArray } from "../Types/sideNav"

export const SIDENAV_ARRAY: SideNavArray[] = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'Search',
    path: '/search',
    icon: <SearchIcon />
  },
  {
    title: 'Message',
    path: '/message',
    icon: <MessageIcon />
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <ProfileIcon />,
  },
  
]
