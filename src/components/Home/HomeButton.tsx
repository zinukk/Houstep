import styled from '@emotion/styled';

interface HomeButtonProps {
  event: () => void;
}

const HomeButton = ({ event }: HomeButtonProps) => {
  return <StHomeButton onClick={event}>주문하러 가기</StHomeButton>;
};

const StHomeButton = styled.button`
  width: 172px;
  height: 88px;
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 400;
  line-height: 30.26px;
  cursor: pointer;
`;

export default HomeButton;
