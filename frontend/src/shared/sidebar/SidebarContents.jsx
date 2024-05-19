

import { FaHome, FaUser, FaCalendarAlt, FaCog } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";


export const SidebarContent = [
  {
    route: '/user/dashboard',
    icon: <FaHome />,
    text: 'Dashboard',
  },
  {
    route: '/user/allcourses',
    icon: <MdAssignment />,
    text: 'Enroll',
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
    route: "/user/settings",
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