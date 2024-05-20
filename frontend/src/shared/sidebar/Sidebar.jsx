import { FaArrowAltCircleLeft } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { SidebarContent, userManagerContents } from './SidebarContents';
import { SideNavLinkText, SidebarContainer, SidebarLinkWrapper } from './sidebarStyles';
import logoImage from '../../components/images/logo.png';
import AvatarUpload from "../../components/AvatarUpload";

const Sidebar = ({ ums }) => {
  const [toggle, setToggle] = useState(true);

  const navigate = useNavigate();

  const handleLogout = () => {
    let path = "/login";
    navigate(path);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  
  const handleNavigateHome = () => {
    let path = "/";
    navigate(path);
  }

  return (
    <SidebarContainer>
      <div className="flex flex-col min-h-[80%]">
        <div className="flex justify-center gap-x-[18px] mb-2 pr-1">
          {toggle && (
            <div className="text-center font-[900] text-2xl hidden md:block">
              <div className="flex items-center">
                <img
                  src={logoImage}
                  alt="#"
                  className="relative left-[10px] w-[32px] h-[30px] mr-3 cursor-pointer"
                  onClick={handleNavigateHome}
                />
                <h2 className="text-[18px]">LearnLodge</h2>
              </div>
            </div>
          )}
          <div className="text-center md:block mt-[10px] mb-6">
            {toggle ? (
              <FaArrowAltCircleLeft
                className="cursor-pointer"
                onClick={handleToggle}
              />
            ) : (
              <img
                className="cursor-pointer"
                src={logoImage}
                onClick={handleToggle} width={25}
              />
            )}
          </div>
        </div>
        <div>
        {toggle ? (
          <AvatarUpload />
          ) : (
            <h2 className="text-center font-semibold">Hola</h2>
          )}   
        </div>

        <SidebarLinkWrapper className="space-y-2">
          {ums ? (
            <>
              {userManagerContents.map(({ route, icon, text }) => (
                <NavLink
                  to={route}
                  key={Math.random()}
                  className={({ isActive }) =>
                    `nav-link text-white ${
                      route !== '#' && isActive ? 'bg-orange' : ''
                    }`
                  }
                >
                  <span>{icon}</span>
                  {toggle && (
                    <SideNavLinkText className="hidden md:block">
                      {text}
                    </SideNavLinkText>
                  )}
                </NavLink>
              ))}
            </>
          ) : (
            <>
              {SidebarContent.map(({ route, icon, text }) => (
                <NavLink
                  to={route}
                  key={Math.random()}
                  className={({ isActive }) =>
                    `nav-link text-white ${
                      route !== '#' && isActive ? 'bg-orange' : ''
                    }`
                  }
                >
                  <span>{icon}</span>
                  {toggle && (
                    <SideNavLinkText className="hidden md:block">
                      {text}
                    </SideNavLinkText>
                  )}
                </NavLink>
              ))}
            </>
          )}
        </SidebarLinkWrapper>
      </div>
      <div>
        <div
          className={` ${
            toggle ? 'sidebar__footer' : 'flex flex-col items-center'
          }`}
        >
          <div
            className={`flex flex-col items-center md:block ${
              toggle && 'md:pl-[25px] md:pr-[10px]'
            }`}
          >
            <div className="flex items-center mb-[20px] cursor-pointer ">
               {/* <img src="https://i.pravatar.cc/150?img=59" className="w-[45px] h-[45px] rounded-full" />       */}
              {toggle && (
                <div className="hidden md:ml-[16px] md:block">
                  {/* <p className=" capitalize font-normal font-xs text-grayrgb">
                      name
                  </p> */}
                </div>
              )}
            </div>
            <div
              className={`border border-white mb-[30px] w-[40px] hover:bg-[#6d4c20] ${
                toggle ? 'w-[40px] md:w-[90%]' : 'w-[40px]'
              } h-[40px] rounded-[6px] flex items-center justify-center cursor-pointer`}
              onClick={handleLogout}
            >
              <MdLogout />
              {toggle && (
                <p
                  className="hidden md:block font-normal text-base ml-[11px]"
                >
                  Logout
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
