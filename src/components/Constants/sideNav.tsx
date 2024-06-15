// import { HomeIcon, ProfileIcon, MessageIcon, SearchIcon } from "../Icon/icons" is replaced with the library below
import { ChatBubbleBottomCenterIcon, HomeIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline"
import { SideNavArray } from "../Types/sideNav"

export const SIDENAV_ARRAY: SideNavArray[] = [
  {
    title: 'Home',
    path: '/home',
    icon: <HomeIcon className="size-8"/>,
  },
  {
    title: 'Search',
    path: '/search',
    icon: <MagnifyingGlassIcon className="size-8"/>
  },
  {
    title: 'Message',
    path: '/message',
    icon: <ChatBubbleBottomCenterIcon className="size-8"/>
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <UserIcon className="size-8"/>,
  },
  
]
