import styled from 'styled-components';
import DashboardNavbar from '../widgets/layout/dashboard-navbar';
import Sidebar from './sidebar/Sidebar';

function Layout ({ children}) {
  return (
    <DashboardContainer>
      <Sidebar />
      <DashboardContentWrapper>
        <DashboardNavbar />
        <DashboardContent>{children}</DashboardContent>
      </DashboardContentWrapper>
    </DashboardContainer>
  );
}

export default Layout;

const DashboardContainer = styled.div.attrs({ className: 'bg-grey-400' })`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const DashboardContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const DashboardContent = styled.div`
  flex: 1;
  overflow-y: scroll;
  height: 100%;
  padding: 0px;
  background-color: #ffffff;
  .profile-tab {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: red;
  }
`;
