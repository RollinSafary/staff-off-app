import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';
import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const MainLayout = () => (
  <MainWrapper>
    <Navbar />
    <main style={{ margin: 0, padding: 0 }}>
      <Outlet />
    </main>
  </MainWrapper>
);

export default MainLayout;
