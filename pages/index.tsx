import { useRouter } from 'next/router';
import Image from 'next/image';
import LogoImg from '../public/assets/images/LogoImg.webp';
import HomeButton from '@src/components/Home/HomeButton';
import styled from '@emotion/styled';

const Home = () => {
  const router = useRouter();

  const navigateToOrder = () => {
    router.push('/order');
  };

  return (
    <StHome>
      <StMain>
        <StImage src={LogoImg} alt="반장창고 로고 이미지" />
        <HomeButton event={navigateToOrder} />
      </StMain>
    </StHome>
  );
};

const StHome = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
`;

const StMain = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 41px;
  width: 100%;
`;

const StImage = styled(Image)`
  width: 150px;
  height: 51px;
`;

export default Home;
