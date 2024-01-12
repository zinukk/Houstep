import Image from 'next/image';
import LogoImg from '/public/assets/images/LogoImg.webp';
import styled from '@emotion/styled';

const Order = () => {
  return (
    <StOrder>
      <StHeader>
        <StImage src={LogoImg} alt="로고 이미지" />
      </StHeader>
    </StOrder>
  );
};

const StOrder = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const StHeader = styled.header`
  position: fixed;
  width: 430px;
  height: 57px;
  background-color: ${({ theme }) => theme.color.black};
`;

const StImage = styled(Image)`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 94.12px;
  height: 32px;
`;

export default Order;
