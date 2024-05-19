

import { FaHome, FaUser, FaCalendarAlt, FaCog } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";


export const SidebarContent = [
  {
    route: '/user/dashboard',
    icon: <FaHome />,
    text: 'Dashboard',
  },
  {
    route: '/user/assignment',
    icon: <MdAssignment />,
    text: 'Courses',
  },
  {
    route: '/user/profile',
    icon: <FaUser />,
    text: 'Profile',
  },
  {
    route: '/user/contact',
    icon: <RiTeamFill />,
    text: 'Contact',
  },
  {
    route: '/schedule',
    icon: <FaCalendarAlt />,
    text: 'Schedule',
  },
  {
    route: '/support',
    icon: <BiSupport />,
    text: 'Support',
  },
  {
    route: "/settings",
    icon: <FaCog />,
    text: 'Settings',
  },
];

export const userManagerContents = [
  {
    route: '/umsdashboard',
    icon: <FaHome />,
    text: 'Dashboard',
  },
  {
    route: '/account-management',
    icon: <FaHome />,
    text: 'Accounts',
  },
  {
    route: '/documents',
    icon: <FaHome />,
    text: 'Documents',
  },
  {
    route: '#',
    icon: <FaHome />,
    text: 'Inbox',
  },
  {
    route: '#',
    icon: <FaHome />,
    text: 'Settings',
  },
]