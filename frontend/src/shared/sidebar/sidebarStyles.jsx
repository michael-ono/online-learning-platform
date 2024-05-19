import styled from 'styled-components';

export const SidebarContainer = styled.div.attrs({
  className: 'bg-[#0b3860] text-white flex flex-col justify-center  md:block',
})`
  height: 100vh;
  /* width: 250px; */
  overflow-y: auto;
  overflow-x: hidden; 
  padding-top: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SideNavLinkText = styled.p`
  line-height: 17px;
  font-family: 'Inter', sans-serif;
  margin-right: 50px;
  font-size: 15px;
  font-weight: 600;
`;

export const SidebarLinkWrapper = styled.div`
  margin-top: 16px;
  & > :first-child {
    margin-bottom: 5px;
  }

  .nav-link {
    white-space: nowrap;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 20.35px;
    padding: 10px 30.583px 10px 25px;
    margin: 5px 0 5px 0;
    @media only screen and (min-width: 768px) {
      padding: 10px 30.583px 10px 30.25px;
    }
  }
`;
