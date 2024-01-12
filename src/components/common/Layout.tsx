import { TLayout } from '@src/types/Common';
import styled from '@emotion/styled';

const Layout = ({ children }: TLayout) => {
  return <StLayout>{children}</StLayout>;
};

const StLayout = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 430px;
  height: 100vh;
  background: ${({ theme }) => theme.color.white};
`;

export default Layout;
